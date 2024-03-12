import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  TextBoard,
  Title,
  Description,
  SignupButton,
} from "../Style/Home.jsx";

const CreateForm = () => {
  return (
    <Container>
      <TextBoard>
        <Title>폼 작성하기</Title>
        <Description>폼폼폼</Description>
      </TextBoard>
      <Link to="/">
        <SignupButton>폼폼폼</SignupButton>
      </Link>
      <Link to="/">
        <SignupButton>Home</SignupButton>
      </Link>
    </Container>
  );
};

export default CreateForm;
