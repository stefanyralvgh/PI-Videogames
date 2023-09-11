import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationButton = styled.button`
  background-color: #ffc145;
  color: #fffffb;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 25px;

  &:disabled {
    background-color: #fffffb;
    color: #ffc145;
  }

  &:hover {
    background-color: #ffaa00;
  }
`;

export const LoadingMessage = styled.p`
  font-size: 18px;
  color: #5b5f97;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fffffb;
`;

export const HomeFilters = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
 `;

export const FilterGroup = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`;

export const FormLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: #ff6b6c;

`;

export const SelectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  
`;

export const SelectLabel = styled.label`
  font-size: 16px;
  padding: 20px;
  color: #5b5f97;
`;

export const Select = styled.select`
  padding: 5px;
  font-size: 16px;
  padding: 10px;
  font-size: 16px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;
