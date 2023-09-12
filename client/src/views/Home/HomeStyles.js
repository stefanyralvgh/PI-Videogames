import styled from "styled-components";

export const NavigationButton = styled.button`
  background-color: #ff6b6c;
  color: #fffffb;
  border: none;
  padding: 10px 10px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 16px;
  margin-right: 10px;
  margin-bottom: 25px;

  &:disabled {
    background-color: #fffffb;
    color: #ff4d4d;
  }

  &:hover {
    background-color: #ff4d4d;
    color: #fffffb;
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
font-family: 'Chakra Petch', sans-serif;
`;



export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

`;

export const SelectContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 20px;
  
`;

export const SelectLabel = styled.label`
  font-size: 16px;
  padding: 8px;
  color: #5b5f97;
  font-weight:bold
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 13px;
  background-color: #e0e0eb;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  height: 37px;

  &:hover {
    background-color:#e0e0eb;
  }
`;