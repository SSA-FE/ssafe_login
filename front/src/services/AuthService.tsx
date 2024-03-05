import axios from "axios";
import authHeader from "./AuthHeader";

class AuthService {
  signup(email: string, pw: string, comparePw: string) {
    return axios
      .post("http://localhost:8000/auth/signup", {
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
    return axios
      .post("http://localhost:8000/auth/login", {
        email: email,
        pw: pw,
      })
      .then((response) => {
        console.log("로그인성공");
        if (response.data.accessToken) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
      .catch(function (error) {
        console.log("로그인 실패" + error);
      });
  }
  logout() {
    localStorage.removeItem("user");
  }
  test() {
    return axios
      .get("http://localhost:8000/auth/test", {
        headers: authHeader(),
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getCurrentUser() {
    const userStr = localStorage.getItem("user");
    if (userStr) return JSON.parse(userStr);
    return null;
  }
}
export default new AuthService();
