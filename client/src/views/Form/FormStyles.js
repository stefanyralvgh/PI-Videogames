import styled from "styled-components";

export const FormCheckboxes = styled.input`
 background-color: blue;
`;

export const FormFirst = styled.div`
  float: left;
  width: 50%;
  padding-right: 10px;
  box-sizing: border-box;
  justify-content: flex-start;
  height: 200px;
`;

export const FormSecond = styled.div`
  float: right;
  width: 50%;
  padding-left: 10px;
  box-sizing: border-box;
  height: 200px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  width: 90%;
  height: auto;
`;

export const FormTitle = styled.h1`
  font-family: 'Chakra Petch', sans-serif;
  color: #5b5f97; 
  font-weight: bolder;
  font-size: 36px;
`;

export const FormGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`;

export const FormLabel = styled.label`
  background-color: #ffc145; 
  color: #fffffb; 
  padding: 5px 10px;
`;
export const LabelCheckbox = styled.label`
  background-color: blue; 
  color: #fffffb; 
  padding: 5px 10px;
`;

export const FormInput = styled.input`
 padding: 10px;
  font-size: 16px;
  border: 2px solid #b8b8d1;
  
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

export const FormTextarea = styled.textarea`
  color: #5b5f97; 
  border: 1px solid #5b5f97; 
  padding: 5px;
  height: 20px;
`;

export const FormButton = styled.button`
  color: #fffffb; 
  background-color: #ff6b6c; 
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
`;

export const FormImage = styled.img`
  width: 30px;
  height: 20px;
`;

export const CheckboxContainer = styled.div`
   display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 20px;
  
`;

export const FormCheckboxLabel = styled.label`
  color: #5b5f97;
  
`;
