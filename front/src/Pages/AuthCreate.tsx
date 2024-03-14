import React from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  TextBoard,
  Title,
  Description,
  SignupButton,
} from "../Style/Home.jsx";

const AuthCreate = () => {
  let accessToken = localStorage.getItem("accessToken");
  let refreshToken = localStorage.getItem("refreshToken");

  const navigate = useNavigate();

  const onValidLogIn = () => {
    fetch("http://localhost:8000/auth/test", {
      method: "GET",
      headers: {
        //   "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
        "refresh-token": `${refreshToken}`,
      },
    })
      .then((res) => res.json())
      // 1. 성공하면 : 접근 권한이 있다고 alert 띄우고 /CreateForm 으로 이동
      .then((res) => {
        console.log(res);
        alert(`${res.message}`);
      })
      // 2. 실패하면(error 뜨면) : 접근 권한 없다고 alert 띄우기
      .catch((err) => {
        console.log(err);
      });
    navigate("/CreateForm");
  };

  return (
    <Container>
      <TextBoard>
        <Title>작성 페이지 권한 확인</Title>
        <Description>편집 권한을 확인합니다.</Description>
      </TextBoard>
      <form onSubmit={onValidLogIn}>
        <SignupButton type="submit">확인</SignupButton>
        <Link to="/">
          <SignupButton type="submit">Home</SignupButton>
        </Link>
      </form>
    </Container>
  );
};

export default AuthCreate;
