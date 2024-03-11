import axios from "axios";

/** CREATE CUSTOM AXIOS INSTANCE */
const AuthAPI = axios.create({
  baseURL: "http://localhost:8000/auth/signup",
  headers: {
    "Content-Type": "application/json",
  },
});

// data: {
//   email, pw, comparePw
// }

export default AuthAPI;

// // const TOKEN_TYPE = localStorage.getItem("tokenType");
// // const access-token = localStorage.getItem("accessToken");

// const axios = require('axios');

// // 지정된 ID를 가진 유저에 대한 요청
// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // 성공 핸들링
//     console.log(response);
//   })
//   .catch(function (error) {
//     // 에러 핸들링
//     console.log(error);
//   })
//   .finally(function () {
//     // 항상 실행되는 영역
//   });

// // 선택적으로 위의 요청은 다음과 같이 수행될 수 있습니다.
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
