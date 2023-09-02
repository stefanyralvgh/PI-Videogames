import styled from "styled-components";

export const CardContainer = styled.div`
  width: 200px; 
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

export const CardContent = styled.div`
  padding: 10px;
`;

export const CardTitle = styled.h2`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 5px;
`;

export const GenreItem = styled.span`
  background-color: #007bff;
  color: #fff;
  padding: 5px 10px;
  border-radius: 5px;
  margin: 2px;
  font-size: 12px;
`;

