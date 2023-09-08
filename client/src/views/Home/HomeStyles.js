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

export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #333;
`;




export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Arial, sans-serif;
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: blue;
  margin-top: 20px;
`;

export const SelectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SelectLabel = styled.label`
  font-size: 16px;
`;

export const Select = styled.select`
  padding: 5px;
  font-size: 16px;
`;
