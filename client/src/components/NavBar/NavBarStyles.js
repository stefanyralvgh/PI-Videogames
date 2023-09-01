import styled from "styled-components";
import { Link } from "react-router-dom";



export const NavContainer = styled.nav `
  background-color: #271538;  
  height: 65px;
  display: flex;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 120px;
    justify-content: space-between;
    gap: 20px;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 110vw;
    justify-content: space-between;
    
  }
`;

export const HomeLink = styled(Link)
`
    width: 30px;
    text-decoration: none;
    color: #dccdf8;
    &:hover {
      color: #8776a2; 
      cursor: pointer; 
  }
`;

export const AboutLink = styled(Link)
`
    width: 50px;
    margin-left: 50px;
    text-decoration: none;
    color: #dccdf8;

    &:hover {
      color: #8776a2; 
      cursor: pointer; 
  }
    @media screen and (max-width: 767px) {
      margin-left:12px;
      &:hover {
        color: #8776a2; 
        cursor: pointer; 
      }
    }
`;

export const FavsLink = styled(Link)`
    color: #f5e2ff;
    text-decoration: none;
    height: 25px;
    width: 90px;
    border-radius: 20px;
    margin: auto;
    margin-left: 7px;
    margin-top: 22px;
    font-size: 20px;
   

    @media screen and (max-width: 767px) {
    display: flex;
    margin: 0px;
    justify-content: center;
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    display: flex;
    justify-content: center;
    
  } 
`


export const LogOutButton = styled.button`
  position: absolute; 
  top: 0;
  right: 0;
  padding: 0.5rem;
  margin: 10px;
  
 
  border: transparent;
  color: white;
  font-size: 25px ;
  cursor: pointer;
  background-color:transparent ;
 
    span{
      display: flex;
      flex-direction: column;
      font-size: 9px;
    }
  @media screen and (min-width: 768px) and (max-width: 1279px) {
    right: 150px;
  }

 
`;