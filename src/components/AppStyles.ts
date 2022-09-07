import styled from "styled-components";

const backgroundimage = require("../img/bg.png");

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundimage});
  background-color: black;
  background-size: cover;
  background-repeat: no-repeat;
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: absolute;
  background-color: white;
  width: 28vw;
  height: 80vh;
  text-align: center;
`;

export const BtnGreen = styled.button`
  width: 100%;
  background-color: #76bb4c;
`;
