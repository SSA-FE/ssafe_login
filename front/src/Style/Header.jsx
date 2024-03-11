import styled from "styled-components";

export const HeaderArea = styled.div`
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

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: flex;
  height: flex;
  margin: 10px 30px;
  color: #263238;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
  &: Link;
`;

export const InfoText = styled.div`
  width: flex;
  height: 100%;
  padding: 2px 15px;
  margin: 10px;
  font-size: 12px;
  text-align: center;
  align-items: center;
  border-radius: 60px;
`;

export const WriteButton = styled.button`
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
