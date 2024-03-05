import React, { useState } from "react";
import styled from "styled-components";
const SignUpTopBarStyle = styled.div`
  .TopBarContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    border-bottom: 1px solid grey;
  }
  .TopBarLeft {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .TopBarTitle {
    padding: 20px;
    font-size: 20px;
    font-weight: 700;
  }
  .TopBarVersion {
    background-color: rgb(210, 214, 214);
    color: grey;
    height: 20px;
    line-height: 18px;
    padding: 5px;
    border-radius: 20px;
    margin-left: 20px;
    align-items: center;
  }
  .TopBarTag {
    background-color: rgb(210, 243, 255);
    color: rgb(52, 201, 255);
    height: 20px;
    line-height: 18px;
    padding: 5px;
    margin-left: 40px;
    border-radius: 20px;
    align-items: center;
  }
  .TopBarWriteBtn {
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
  }
`;
const SignUpTopBar: React.FC = () => {
  return (
    <SignUpTopBarStyle>
      <div className="TopBarContainer">
        <div className="TopBarLeft">
          <div className="TopBarTitle">폼나는 싸패</div>
          <div className="TopBarVersion">v3.4.1 24/02/25</div>
          <div className="TopBarTag">
            2024 SAFFE FORM PROJECT Create your own Form
          </div>
        </div>
        <button className="TopBarWriteBtn"> 바로 작성하기</button>
      </div>
    </SignUpTopBarStyle>
  );
};

export default SignUpTopBar;
