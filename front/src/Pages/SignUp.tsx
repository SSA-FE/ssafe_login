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

interface ISignUpForm {
  email: string;
  password: string;
  passwordCheck: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<ISignUpForm>({ shouldFocusError: true });

  const navigate = useNavigate();

  const onValidSignUp = (data: ISignUpForm) => {
    // 저장할 정보
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
      .then((res) => res.json())
      .then((res) => {
        if (res.status === 200) {
          console.log(`회원가입 성공: + ${data.email}`);
          alert(`회원가입 성공!
email: ${data.email}
password: ${data.password}
        `);
          navigate("/");
        } else if (res.status === 400) {
          alert(`회원가입 실패: ${data.email}`);
        } else if (res.status === 500) {
          alert("서버 오류");
        }
      });
    // .catch((error) => {
    //   console.error(`오류 발생: ${error}`);
    //   alert("오류가 발생했습니다.");
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
        <form onSubmit={handleSubmit(onValidSignUp)}>
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

export default SignUp;
