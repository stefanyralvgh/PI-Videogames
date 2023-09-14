import styled from "styled-components";

export const FormFirst = styled.div`
  float: left;
  width: 50%;
  padding-right: 10px;
  height: 200px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  justify-content: center;
  height: auto;
`;

export const FormTitle = styled.h1`
  font-family: "Chakra Petch", sans-serif;
  color: #ffc247;
  font-weight: bolder;
  font-size: 36px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const FormLabel = styled.label`
  color: #ffc247;
  font-weight: bolder;
  padding: 10px;
  margin: 10px;
`;
export const FormLabelCheckbox = styled.label`
  
  font-weight: bolder;

  
`;

export const FormInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #b8b8d1;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  display: flex;
  margin: auto;
  height: 13px;
  width: 40%;
  margin-top: 10px;
  margin-bottom: 10px;

  &::placeholder {
    color: #5b5f97;
  }

  &:focus {
    border-color: #ff6b6c;
    color: #5b5f97;
  }
`;
export const FormTextTarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #b8b8d1;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  display: flex;
  margin: auto;
  height: 13px;
  width: 40%;
  margin-top: 10px;
  margin-bottom: 10px;

  &::placeholder {
    color: #5b5f97;
  }

  &:focus {
    border-color: #ff6b6c;
    color: #5b5f97;
  }
`;

export const FormInputDate = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #b8b8d1;
  border-radius: 20px;
  outline: none;
  transition: border-color 0.3s ease-in-out;
  display: flex;
  justify-content: end;
  height: 13px;
  width: 15%;
  margin-top: 10px;

  &::placeholder {
    color: #5b5f97;
  }

  &:focus {
    border-color: #ff6b6c;
    color: #5b5f97;
  }
`;

export const FormButton = styled.button`
  color: #fffffb;
  align-items: center;
  background-color: #ff6b6c;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  margin-bottom: 20px;
  &:disabled {
    background-color: #ffcccc;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  
`;

export const DetailButton = styled.button`
  position: absolute;
  top: 20px; 
  left: 10px; 
  padding: 10px 20px;
  display: flex;
  flex-direction: column-reverse;
  padding: 0.5rem;
  font-size: smaller;
  border-radius: 50px;
  border: none;
  background-color: #ff6666;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  
`;

export const FormImage = styled.img`
  width: 30px;
  height: 20px;
`;

export const CheckboxContainer = styled.div`
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 20px;
  width: 800px; */

  display: grid; /* Usar cuadrícula CSS */
  grid-template-columns: repeat(5, 1fr); /* Cinco columnas */
  grid-gap: 5px; /* Espacio entre elementos */
  margin: 20px;
  width: 800px;
  align-items: center; /* Alinear verticalmente los elementos */
`;
