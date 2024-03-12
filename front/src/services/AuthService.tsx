import axios from "axios";
import authHeader from "./AuthHeader";

const instance = axios.create({
  baseURL: "http://localhost:8000", // Set your base URL here
});
class AuthService {
  signup(email: string, pw: string, comparePw: string) {
    return instance
      .post("/auth/signup", {
        email: email,
        pw: pw,
        comparePw: comparePw,
      })
      .then(function (response) {
        console.log("회원가입 성공" + response.data);
      })
      .catch(function (error) {
        console.log("회원가입 실패" + error);
      });
  }

  login(email: string, pw: string) {
    return instance
      .post("/auth/login", {
        email: email,
        pw: pw,
      })
      .then((response) => {
        console.log("로그인성공");
        if (response.data.accessToken) {
          console.log("token 발행");
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(function (error) {
        console.log("로그인 실패" + error);
      });
  }
  logout() {
    console.log("로그아웃 드가자");
    localStorage.removeItem("user");
  }
  test() {
    console.log(authHeader());
    return instance
      .get("/auth/test", {
        headers: authHeader(),
      })
      .then((response) => {
        console.log("JWT TEST SUCCESS" + response);
      })
      .catch((error) => {
        console.log("JWT TEST FAIL" + error);
      });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();
