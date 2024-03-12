import React from "react";
import { Link } from "react-router-dom";
import {
  HeaderArea,
  HeaderLeft,
  Logo,
  InfoText,
  WriteButton,
} from "../Style/Header.jsx";

const Header = () => {
  return (
    <>
      <HeaderArea>
        <HeaderLeft>
          <Link to="/">
            <Logo>폼나는 싸패</Logo>
          </Link>
          <InfoText style={{ color: "#9E9E9E", backgroundColor: "#EEEEEE" }}>
            v 3.4.1 24/02/13
          </InfoText>
          <InfoText style={{ color: "#26C6DA", backgroundColor: "#E0F7FA" }}>
            2024 SSAFE FORM PROJECT Creare your own Form
          </InfoText>
        </HeaderLeft>
        <Link to="/AuthCreate">
          <WriteButton>바로 작성하기</WriteButton>
        </Link>
      </HeaderArea>
    </>
  );
};

export default Header;
