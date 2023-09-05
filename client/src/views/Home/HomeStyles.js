import styled from "styled-components"; 
import { Link } from "react-router-dom";

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
export const FormLink = styled(Link)
`
    width: 30px;
    text-decoration: none;
    color: #dccdf8;
    &:hover {
      color: #8776a2; 
      cursor: pointer; 
  }
`;


export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #333;
`;

