import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  Container,
  TextBoard,
  Title,
  TextBox,
  InputInfo,
  InputBox,
  SignupButton,
} from "../Style/InputBox.jsx";

interface ISignInForm {
  email: string;
  password: string;
}

const LogIn = () => {
  const { register, handleSubmit } = useForm<ISignInForm>({
    shouldFocusError: true,
  });

  const navigate = useNavigate();

  // 저장된 정보
  // email : ssafe11@gmail.com
  // password : sfsf234%

  // email: test11@gmail.com
  // password : test1234%

  // 서버 : 회원 DB를 통해 사용자 id & pw 일치 여부 확인 - accessToken & refreshToken 발급
  // 토큰 DB에 사용자 refresh Token 저장 (?)
  // 생성된 accessToken & refreshToken - 클라이언트에 반환

  const handleLogIn = (data: ISignInForm) => {
    fetch("http://localhost:8000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        pw: data.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        // response Fields
        if (res.accessToken) {
          localStorage.setItem("accessToken", res.accessToken);
        }
        if (res.refreshToken) {
          localStorage.setItem("refreshToken", res.refreshToken);
        }
        // authController.js line 62
        if (res.userInfo) {
          console.log(`userInfo: ${res.userInfo.email}`);
        }
        navigate("/AuthCreate");
      });
    // 에러시 에러메세지 출력(406, 500)
    // .catch((err) => {
    //   if ((err.status = 406)) {
    //     alert("패스워드가 일치하지 않습니다.");
    //   }
    // });
  };

  return (
    <Container>
      <TextBoard>
        <Title>
          더 쉬운 폼을 위한 시작
          <br />
          폼나는싸패
        </Title>
        <form onSubmit={handleSubmit(handleLogIn)}>
          <TextBox>
            <InputInfo htmlFor="email">이메일</InputInfo>
            <InputBox
              id="email"
              type="email"
              placeholder="ssafe11@gmail.com"
              {...register("email", {
                required: "이메일은 필수 입력입니다",
              })}
            />
            <InputInfo htmlFor="password">비밀번호</InputInfo>
            <InputBox
              id="password"
              type="password"
              placeholder="********"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다",
              })}
            />
          </TextBox>
          <SignupButton type="submit">로그인</SignupButton>
        </form>
      </TextBoard>
    </Container>
  );
};

export default LogIn;
