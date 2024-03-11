import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TextBoard = styled.div`
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 400px;
  width: auto;
  margin-bottom: 10px;
`;

const InputInfo = styled.label`
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 8px 15px;
`;

const InputBox = styled.input`
  width: 400px;
  height: 30px;
  padding: 10px 10px 10px 20px;
  margin-bottom: 10px;
  border-radius: 30px;
  border: 2px solid #e0e0e0;
  font-size: 15px;
  &:focus {
    outline-color: #81d4fa;
  }
`;

const SignupButton = styled.button`
  width: 440px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #81d4fa;
  border-radius: 30px;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;

interface ISignUpForm {
  email: string;
  password: string;
  passwordCheck: string;
}

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpForm>({ shouldFocusError: true });

  const navigate = useNavigate();

  const onValid = (data: ISignUpForm) => {
    console.log(data);
    alert(`회원가입 성공!
email: ${data.email}
password: ${data.password}
      `);
    // email : ssafe11@gmail.com
    // password : sfsf234%
    // e.preventDefault();
    fetch("http://localhost:8000/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        pw: data.password,
        comparePw: data.passwordCheck,
      }),
    })
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    navigate("/");
  };

  return (
    <Container>
      <TextBoard>
        <Title>
          더 쉬운 폼을 위한 시작
          <br />
          폼나는싸패
        </Title>
        <form onSubmit={handleSubmit(onValid)}>
          <TextBox>
            <InputInfo htmlFor="email">이메일</InputInfo>
            <InputBox
              id="email"
              type="email"
              placeholder="ssafe11@gmail.com"
              {...register("email", {
                required: "이메일은 필수 입력입니다",
                pattern: {
                  value: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-za-z0-9-]+/,
                  message: "이메일은 '@'를 반드시 포함해야합니다.",
                },
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
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/,
                  message:
                    "비밀번호는 숫자, 영문, 특수기호를 포함해 8자리 이상 16자리 이하여야 합니다.",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
            <InputInfo htmlFor="passwordCheck">비밀번호 확인</InputInfo>
            <InputBox
              id="passwordCheck"
              type="password"
              placeholder="********"
              {...register("passwordCheck", {
                required: "비밀번호 확인이 필요합니다",
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/,
                validate: {
                  check: (value) => {
                    const originalPassword = getValues("password");
                    if (originalPassword && originalPassword !== value) {
                      return "비밀번호가 일치하지 않습니다.";
                    }
                  },
                },
              })}
            />
            {errors.passwordCheck && <p>{errors.passwordCheck.message}</p>}
          </TextBox>
          <SignupButton type="submit">회원가입</SignupButton>
        </form>
      </TextBoard>
    </Container>
  );
};

export default Signup;
