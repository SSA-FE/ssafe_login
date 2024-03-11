import React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  TextBoard,
  Title,
  TextBox,
  InputInfo,
  InputBox,
  SignupButton,
} from "../Style/InputBox.jsx";

interface ISignUpForm {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpForm>({ shouldFocusError: true });

  const onValidSignIn = (data: ISignUpForm) => {
    console.log(data);
    // fetch("http://localhost:8000/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     email: data.email,
    //     password: data.password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((res) => {
    //     localStorage.setItem("Authorization", res.access_token);
    //   });

    // POST http://localhost:8000/auth/login
    // Request fields : email, pw
    // Response fields : accessToken, refreshToken, userInfo
  };

  return (
    <Container>
      <TextBoard>
        <Title>
          더 쉬운 폼을 위한 시작
          <br />
          폼나는싸패
        </Title>
        <form onSubmit={handleSubmit(onValidSignIn)}>
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
            {errors.email && <p>{errors.email.message}</p>}
            <InputInfo htmlFor="password">비밀번호</InputInfo>
            <InputBox
              id="password"
              type="password"
              placeholder="********"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다",
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </TextBox>
          <SignupButton type="submit">로그인</SignupButton>
        </form>
      </TextBoard>
    </Container>
  );
};

export default SignIn;
