import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

import {
  Container,
  TextBoard,
  Title,
  Description,
  SignupButton,
} from "../Style/Home.jsx";

// interface IAuthToken {
//   accessToken: string;
//   refreshToken: string;
// }

const AuthCreate = () => {
  let accessToken = localStorage.getItem("accessToken");
  let refreshToken = localStorage.getItem("refreshToken");

  // const { handleSubmit } = useForm<IAuthToken>();

  const navigate = useNavigate();

  const onValidLogIn = () =>
    fetch("http://localhost:8000/auth/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Request headers
        authorization: `Bearer ${accessToken}`,
        "refresh-token": `${refreshToken}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        // 1. 성공하면 : 접근 권한이 있다고 alert 띄우고 /CreateForm 으로 이동
        alert("권한 확인이 완료되었습니다");
        navigate("/CreateForm");
      })
      // 2. 실패하면(error 뜨면) : 접근 권한 없다고 alert 띄우기
      .catch(() => {
        alert("접근 권한이 없습니다");
      });

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
