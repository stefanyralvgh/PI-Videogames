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
  border: 2px solid #b8b8d1;
  border-radius: 15px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  display: flex;
  justify-content: end;
  height: 13px;

  &::placeholder {
    color: #5b5f97;
  }

  &:focus {
    border-color: #ff6b6c;
    color: #5b5f97;
  }
`;

export const FormLink = styled(Link)`
size: 20px;
  color: #ff6b6c;
  padding: 20px;
  /* background-color: #ff6b6c; */
  .descripcion {
    display: none;
  }

  /* Mostrar la descripción al hacer hover sobre el enlace */
  &:hover .descripcion {
    display: inline;
  }
`;