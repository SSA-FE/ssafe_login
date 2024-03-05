import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SignUpTopBar from "../components/SignUpTopBar";
import { useNavigate } from "react-router-dom";

interface SignUpInputStyleProps {
  error: boolean;
}

const SignUpInputStyle = styled.div<SignUpInputStyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  b {
    text-align: left;
    width: 330px;
    margin: 30px 5px 5px 5px;
  }
  span {
    color: red;
    text-align: left;
    width: 330px;
    margin: 5px;
    display: ${(props) => (props.error ? "block" : "none")};
  }
  input {
    width: 350px;
    height: 50px;
    background-color: white;
    border-radius: 30px;
    border: 3px solid rgb(220, 220, 220);
    padding-left: 20px;
  }
  input:focus {
    border: 3px solid skyblue;
    outline: none;
  }
  .MainVisibleImg {
    position: absolute;
    top: 70px;
    right: 15px;
    opacity: 50%;
  }
`;

const SignUpMainStyle = styled.div`
  .MainContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
  }
  h1 {
    font-size: 40px;
    margin: 30px;
    text-align: center;
  }

  .MainSignUpBtn {
    background-color: skyblue;
    width: 370px;
    height: 50px;
    border-radius: 30px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 40px;
  }
  button[disabled] {
    background-color: grey;
  }
`;

const SignUpMain: React.FC = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordCheckError, setPasswordCheckError] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isPwVisible, setIsPwVisible] = useState(false);
  const [isPwCheckVisible, setIsPwCheckVisible] = useState(false);

  useEffect(() => {
    setIsButtonDisabled(
      emailError ||
        passwordError ||
        passwordCheckError ||
        email === "" ||
        password === "" ||
        passwordCheck === ""
    );
  }, [emailError, passwordError, passwordCheckError]);

  const checkEmail = () => {
    const emailRegex =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (!emailRegex.test(email)) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
    setIsButtonDisabled(
      emailError ||
        passwordError ||
        passwordCheckError ||
        email === "" ||
        password === "" ||
        passwordCheck === ""
    );
  };

  const checkPassword = () => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,16}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
    setIsButtonDisabled(
      emailError ||
        passwordError ||
        passwordCheckError ||
        email === "" ||
        password === "" ||
        passwordCheck === ""
    );
  };

  const checkPasswordCheck = () => {
    if (passwordCheck !== password) {
      setPasswordCheckError(true);
    } else {
      setPasswordCheckError(false);
    }
    setIsButtonDisabled(
      emailError ||
        passwordError ||
        passwordCheckError ||
        email === "" ||
        password === "" ||
        passwordCheck === ""
    );
  };

  const handleSignUp = () => {
    checkEmail();
    checkPassword();
    checkPasswordCheck();

    if (
      !emailError &&
      !passwordError &&
      !passwordCheckError &&
      email !== "" &&
      password !== "" &&
      passwordCheck !== ""
    ) {
      alert(`Email: ${email}, Password: ${password}`);
      nav("/");
    } else {
      console.log("회원가입 버튼 클릭: 유효성 검사 실패");
    }
  };

  const handlePwVisibleBtn = () => {
    setIsPwVisible(!isPwVisible);
  };

  const handlePwCheckVisibleBtn = () => {
    setIsPwCheckVisible(!isPwCheckVisible);
  };

  return (
    <>
      <SignUpTopBar />
      <SignUpMainStyle>
        <div className="MainContainer">
          <h1 className="MainText">
            더 쉬운 폼을 위한 시작
            <br />
            폼나는 싸패
          </h1>
          <SignUpInputStyle error={emailError}>
            <b>이메일</b>
            <input
              className="MainInputEmail"
              placeholder="이메일을 입력하세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={checkEmail}
            ></input>

            <span className="MainInputEmailErr">
              유효하지않은 이메일 입니다.
            </span>
          </SignUpInputStyle>
          <SignUpInputStyle error={passwordError}>
            <b>비밀번호</b>
            <input
              className="MainInputPw"
              type={isPwVisible ? "text" : "password"}
              placeholder="비밀번호를 입력하세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={checkPassword}
            ></input>
            <img
              className="MainVisibleImg"
              src={
                isPwVisible ? "res/iconInVisible.svg" : "res/iconVisible.svg"
              }
              onClick={handlePwVisibleBtn}
              alt="visible"
            ></img>
            <span className="MainInputPwErr">
              유효하지않은 비밀번호 입니다.
            </span>
          </SignUpInputStyle>
          <SignUpInputStyle error={passwordCheckError}>
            <b>비밀번호 확인</b>
            <input
              className="MainInputPwCheck"
              type={isPwCheckVisible ? "text" : "password"}
              placeholder="비밀번호를 다시 입력하세요"
              value={passwordCheck}
              onChange={(e) => setPasswordCheck(e.target.value)}
              onBlur={checkPasswordCheck}
            ></input>
            <img
              className="MainVisibleImg"
              src={
                isPwCheckVisible
                  ? "res/iconInVisible.svg"
                  : "res/iconVisible.svg"
              }
              onClick={handlePwCheckVisibleBtn}
              alt="visibleIcon"
            />
            <span className="MainInputPwCheckErr">
              비밀번호가 일치하지 않습니다.
            </span>
          </SignUpInputStyle>
          <button
            className="MainSignUpBtn"
            onClick={handleSignUp}
            disabled={isButtonDisabled}
          >
            회원가입
          </button>
        </div>
      </SignUpMainStyle>
    </>
  );
};

export default SignUpMain;
