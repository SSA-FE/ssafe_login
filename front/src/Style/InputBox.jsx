import styled from "styled-components";

export const Container = styled.div`
  font-family: "Noto Sans KR";
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBoard = styled.div`
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-bottom: 50px;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: auto;
  margin: 10px 0px 30px 0px;
`;

export const InputInfo = styled.label`
  font-weight: bold;
  font-size: 15px;
  margin: 10px 10px 8px 15px;
`;

export const InputBox = styled.input`
  width: 400px;
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

export const SignupButton = styled.button`
  width: 440px;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  background-color: #81d4fa;
  border-radius: 30px;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;
