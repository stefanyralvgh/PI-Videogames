import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 80%;
  height: auto;
  margin: auto;
  margin-top: 20px;
`;


export const ButtonItem = styled.button`
  background-color: #ffc34d;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 10px 5px 10px 5px;
  font-size: 12px;
  border: none;

  &:hover {
    background-color: #ff6b6c;
  }
`;



export const DetailText = styled.p`
  color: black;
  font-size: medium;
  font-weight: bold;
  margin-bottom: 25px;
  margin-top: 0;
`;

export const DetailTitle = styled.b`
  color: #ff6b6c;
  font-size: large;
 
`;

export const DetailImage = styled.img`
  box-shadow: 2px 2px 5px whitesmoke;
  opacity: 0.5; 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1; 
`;

export const DetailButton = styled.button`
  padding: 10px 20px;
  display: flex;
  margin: auto;
  margin-top: 45px;
  padding: 0.5rem;
  font-size: smaller;
  border-radius: 5px;
  border: none;
  background-color: #3f8d51;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: #60b874;
  }
`;


