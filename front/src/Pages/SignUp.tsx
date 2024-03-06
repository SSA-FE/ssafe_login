import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

const Container = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const TextBoard = styled.div`
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
`;

const TextBox = styled.div`
  display: flex;
  height: 400px;
  flex-direction: column;
  margin-bottom: 10px;
`;

const InputInfo = styled.label`
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 8px 15px;
`;

const InputBox = styled.input`
  width: 95%;
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
  width: 100%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #81d4fa;
  border-radius: 30px;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;

const Signup = () => {
  interface ISignUpForm {
    email: string;
    password: string;
    passwordCheck: string;
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    watch,
  } = useForm<ISignUpForm>();

  const onSubmit = (data: any) => {
    // console.log(data);
    if (data.password !== data.passwordCheck) {
      setError("passwordCheck", { message: "비밀번호가 다릅니다" });
    }
  };
  //   console.log(formState.errors);
  const onInValid = (error: any) => {
    console.log(error);
  };

  return (
    <Container>
      <TextBoard>
        <Title>
          더 쉬운 폼을 위한 시작
          <br />
          폼나는싸패
        </Title>
        <form onSubmit={handleSubmit(onSubmit, onInValid)}>
          <TextBox>
            <InputInfo htmlFor="email">이메일</InputInfo>
            <InputBox
              id="email"
              type="email"
              {...register("email", {
                required: "이메일은 필수 입력입니다",
                pattern: /^[A-Za-z0-9_.-]+@[A-Za-z0-9-]+\.[A-za-z0-9-]+/,
              })}
              placeholder="ssafe11@gmail.com"
            />
            {/* {errors.id && <p>{errors.id.message}</p>} */}
            {/* {errors.email && <p>유효하지 않은 이메일입니다</p>} */}
            <InputInfo htmlFor="password">비밀번호</InputInfo>
            <InputBox
              id="password"
              type="password"
              {...register("password", {
                required: "비밀번호는 필수 입력입니다",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/,
                  message:
                    "비밀번호는 숫자, 영문, 특수기호를 포함해 8자리 이상 16자리 이하여야 합니다.",
                },
              })}
              placeholder="********"
            />
            {errors.password && <p>유효하지 않은 비밀번호입니다.</p>}
            <InputInfo htmlFor="passwordCheck">비밀번호 확인</InputInfo>
            <InputBox
              id="passwordCheck"
              type="password"
              {...register("passwordCheck", {
                required: "비밀번호 확인이 필요합니다",
                pattern:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*])[A-Za-z\d@#$%^&*]{8,16}$/,
              })}
              placeholder="********"
            />
          </TextBox>
          <SignupButton type="submit">회원가입</SignupButton>
        </form>
      </TextBoard>
    </Container>
  );
};

export default Signup;
