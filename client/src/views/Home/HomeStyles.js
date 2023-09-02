import styled from "styled-components"; 

export const NavigationButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;


export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #333;
`;

