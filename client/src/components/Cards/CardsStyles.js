import styled from "styled-components";
import { Link } from "react-router-dom";

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; 
  gap: 20px;
  width: 80%;
  margin: 0 auto;
  padding: 20px;
`;

export const LinkToDetail = styled(Link) `
text-decoration: none;
`;



export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #548690;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &::placeholder {
    color: #a5be30;
  }

  &:focus {
    border-color: #86a3a8;
  }
`;
