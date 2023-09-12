import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width: 90%;
  margin: auto;
  margin-top: 20px;
`;


export const ButtonItem = styled.button`
 
  background-color: #5a5e96;
    color: #fffffb;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 10px 5px 10px 5px;
  font-size: 12px;
  border: none;

  &:hover {
    background-color: #fffffb;
  color: #5a5e96;
  }
`;



export const DetailText = styled.p`
  color: black;
  font-size: medium;
  font-weight: 600;
  margin-bottom: 25px;
  margin-top: 0;
  font-family: 'Chakra Petch', sans-serif;  
  
`;

export const DetailTitle = styled.b`
  color: #ffc34d;
  font-size: larger;
  font-weight: bolder;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  
`;

export const DetailImage = styled.img`
  box-shadow: 2px 2px 5px whitesmoke;
  opacity: 0.4; 
  position: absolute; 
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1; 
  min-height: 160%;
`;

export const DetailButton = styled.button`
  padding: 10px 20px;
  display: flex;
  margin: auto;
  margin-top: 45px;
  padding: 0.5rem;
  font-size: smaller;
  border-radius: 10px;
  border: none;
  background-color: #ff6666;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
  
  &:active {
    transform: scale(0.9);
  }

  &:hover {
    background-color: #ff4d4d;
  }
`;


