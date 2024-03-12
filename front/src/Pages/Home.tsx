import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TextBoard,
  SubTitle,
  Title,
  Description,
  SignupButton,
} from "../Style/Home.jsx";

const Home = () => {
  return (
    <Container>
      <TextBoard>
        <SubTitle>데이터 수집을 위한 올인원 툴</SubTitle>
        <Title>
          폼을 만들고 분석하는
          <br />
          가장 합리적인 방법
        </Title>
        <Description>
          폼의 제작, 응답자 모집, 보상, 분석에 불필요한 시간을 쏟지 마세요.
          <br />
          모든 핵심 과정을 폼나는싸패에서 한번에 해결하실 수 있습니다.
        </Description>
      </TextBoard>
      <Link to="/LogIn">
        <SignupButton>로그인</SignupButton>
      </Link>
      <Link to="/SignUp">
        <SignupButton>회원가입</SignupButton>
      </Link>
    </Container>
  );
};

export default Home;
