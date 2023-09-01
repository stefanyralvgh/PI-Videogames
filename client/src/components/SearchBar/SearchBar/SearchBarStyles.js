import styled from "styled-components";


export const SearchInput = styled.input `
  background: none;
  width: 240px;
  color: white;
  border-color: transparent;
  height: 40px;
  padding: 15px 20px;
  border-radius: 30px 0px 0px 30px;
  transition: 1s;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  

  @media screen and (max-width: 767px) {
    display: flex;
    margin-left: 400px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 30vw;
  
  }
`;

export const SearchBtn = styled.button `
  background-color: #b1a9bc;
  color: #625671;
  font-size: 16px;
  height: 40px;
  width: 20px;
  border: none;
  border-radius: 0px 30px 30px 0px;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
 
`;

export const RandomBtn = styled.button `
  background: transparent;
  height: 50px;
  width: 50px;
  margin-right: 200px;
  margin-left: 20px; 
  border-style: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.2s;
    
  &:active {
      transform: scale(0.9);
      border: transparent;
    }

  img {
    height: 70px;
    &:active {
      transform: scale(0.9);
    }
  }

  @media screen and (max-width: 767px) {
    justify-content: flex-end;

  }
`;

export const SearchContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right:200px;
  cursor: pointer;
  &:hover {
    ${SearchInput} {
        width: 270px;
        transition:1s;
        animation: ease ;
        background: #ddd9e0;
        color:black ;
    }
   
    /* ${RandomBtn} {
        img{
          height: 67px;
        }
        transition:1s;
        animation: ease ;
    } */
  }

  @media screen and (max-width: 767px) {
    display: flex;
    height: 160px;
    background-color: #271538;  
    margin-bottom: 30px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 30vw;
    
      
  }
`;