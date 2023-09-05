import styled from "styled-components";

export const FormImage = styled.img`
  width: 130px;
  margin-bottom: -10px;
  margin-left: 25px;
  display: flex;
  flex-direction: column;
`;

export const FormErrors = styled.p`
  color: #800000;
  margin: 0px 3px 3px 0px;
  max-width: 160px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0e8fc;
  width: 250px;

  @media screen and (max-width: 767px) {
    width: 90%;
    height: 80vh;
    padding: 1rem;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 90%;
    max-width: 800px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 30%;
    max-width: 400px;
    margin: 0 auto;
  }
`;

export const FormLabel = styled.label`
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const FormButton = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  background-color: #6666ff;
  color: white;
  cursor: pointer;
  margin: 1rem;

  &:hover {
    background-color: #ccccff;
  }
`;