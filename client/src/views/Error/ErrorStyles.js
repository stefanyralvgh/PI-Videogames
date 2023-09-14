import styled from "styled-components";


export const ErrorContainer = styled.div`
  width: 100%;
  height: 100vh; 
  background-image: url('./Images/ERROR.GIF');
  background-size: cover;
  background-repeat: no-repeat;
  position: relative; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ff6666;
  text-align: center;
`;

export const ErrorText = styled.h1`
  position: absolute;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
  font-size: 36px;
 
`;
