import React, { useState } from "react";
import styled from "styled-components";

const TopBarLeft = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const TopBarTitle = styled.div`
  padding: 20px;
  font-size: 20px;
  font-weight: 700;
`;
const TopBarVersion = styled.div`
  background-color: rgb(210, 214, 214);
  color: grey;
  height: 20px;
  line-height: 18px;
  padding: 5px;
  border-radius: 20px;
  margin-left: 20px;
  align-items: center;
`;
const TopBarTag = styled.div`
  background-color: rgb(210, 243, 255);
  color: rgb(52, 201, 255);
  height: 20px;
  line-height: 18px;
  padding: 5px;
  margin-left: 40px;
  border-radius: 20px;
  align-items: center;
`;
const TopBarWriteBtn = styled.button`
  background-color: black;
  color: white;
  height: 50px;
  width: 150px;
  line-height: 18px;
  padding: 5px;
  margin-right: 40px;
  border-radius: 8px;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
`;
const SignUpTopBarStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid grey;
`;
const SignUpTopBar: React.FC = () => {
  return (
    <SignUpTopBarStyle>
      <TopBarLeft>
        <TopBarTitle>폼나는 싸패</TopBarTitle>
        <TopBarVersion>v3.4.1 24/02/25</TopBarVersion>
        <TopBarTag>2024 SAFFE FORM PROJECT Create your own Form</TopBarTag>
      </TopBarLeft>
      <TopBarWriteBtn>바로 작성하기</TopBarWriteBtn>
    </SignUpTopBarStyle>
  );
};

export default SignUpTopBar;
