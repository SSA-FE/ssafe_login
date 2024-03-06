import React from "react";
import styled from "styled-components";

const HeaderArea = styled.div`
  font-family: "Noto Sans KR";
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  border-style: solid;
  border-width: 0px 0px 1.5px 0px;
  border-bottom-color: #e0e0e0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: flex;
  height: flex;
  margin: 10px 30px;
  color: #263238;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 10px;
`;

const InfoText = styled.div`
  width: flex;
  height: 100%;
  padding: 2px 15px;
  margin: 10px;
  font-size: 12px;
  text-align: center;
  align-items: center;
  border-radius: 60px;
`;

const WriteButton = styled.button`
  width: 170px;
  height: 50px;
  margin: 5px 30px 5px 5px;
  font-size: 17px;
  font-weight: bold;
  background-color: black;
  border-radius: 10px;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;

const Header = () => {
  return (
    <>
      <HeaderArea>
        <HeaderLeft>
          <Logo>폼나는 싸패</Logo>
          <InfoText style={{ color: "#9E9E9E", backgroundColor: "#EEEEEE" }}>
            v 3.4.1 24/02/13
          </InfoText>
          <InfoText style={{ color: "#26C6DA", backgroundColor: "#E0F7FA" }}>
            2024 SSAFE FORM PROJECT Creare your own Form
          </InfoText>
        </HeaderLeft>
        <WriteButton>바로 작성하기</WriteButton>
      </HeaderArea>
    </>
  );
};

export default Header;
