import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 600px;
  
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  color: #548690;
  margin-bottom: 20px;
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

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  input[type="text"],
  input[type="tel"],
  textarea {
    padding: 10px;
    font-size: 16px;
    border: 2px solid #548690;
    border-radius: 5px;
    outline: none;
    width: 100%;

    &::placeholder {
      color: #a5be30;
    }
  }

  input[type="file"] {
    margin-left: 10px;
  }

  .game-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
  }

  .genres-div,
  .plat-div {
    display: flex;
    flex-wrap: wrap;
    margin-top: 5px;

    div {
      display: flex;
      align-items: center;
      

      input[type="checkbox"] {

      }
    }
  }
`;

export const FormButton = styled.button`
  background-color: #548690;
  color: #fffffb;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-top: 10px;

  &:hover {
    background-color: #86a3a8;
  }
`;


export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;


export const FormLabel = styled.label`
  color: #ffc34d;

`;
export const FormLabelOptions = styled.label`
  color: black;
`;

export const FormInput = styled.input`
  margin-top: 10px;
`;

