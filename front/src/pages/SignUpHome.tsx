import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignUpTopBar from "../components/SignUpTopBar";

const SignUpTopBarStyle = styled.div`
  .HomeText {
    margin: 30px;
  }
  h1 {
    font-size: 40px;
  }
  span,
  p {
    color: rgb(90, 90, 90);
    font-size: 20px;
  }
  .HomeContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;
  }
  a {
    margin-top: 40px;
  }
  .HomeSignUpBtn {
    background-color: skyblue;
    width: 370px;
    height: 50px;
    border-radius: 30px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
    cursor: pointer;
  }
`;

const SignUpHome: React.FC = () => {
  return (
    <>
      <SignUpTopBar />
      <SignUpTopBarStyle>
        <div className="HomeContainer">
          <span className="HomeText">데이터 수집을 위한 올인원 툴</span>
          <h1 className="HomeText">
            폼을 만들고 분석하는
            <br />
            가장 합리적인 방법
          </h1>
          <p className="HomeText">
            폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요
            <br />
            모든 핵심 과정을 왈라에서 한번에 해결하실 수 있습니다.
          </p>
          <Link to="/main">
            <button className="HomeSignUpBtn">회원가입</button>
          </Link>
        </div>
      </SignUpTopBarStyle>
    </>
  );
};

export default SignUpHome;
