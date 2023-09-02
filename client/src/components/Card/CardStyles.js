import styled from "styled-components";
import { Link } from "react-router-dom";

export const CharId = styled.h2 `
    font-size: small;
    color: #dccdf8;
    display: flex;
    justify-content: center;
    align-items: center ;
    background-color: #1d0f2a;
    border-radius: 40px;
    width: 25px;
    height: 25px;
    margin: 0 auto;
    text-align: center;
   
`;

export const CloseButtonCard = styled.button `
    border-color: transparent;
    background-color: #8b7f9c;
    color: #8b7f9c; 
    position: absolute;
    top: 20px;
    right: 20px;
    margin: 9px ; 
    border: none;
    
`;


export const FavButtonCard = styled.button `
    border-color: transparent;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    font-size: large;
    cursor: pointer;
     
`;


export const NameLink = styled(Link) 
`
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
    color:#1d0f2a;
    text-shadow: 2px 4px 8px #ffffbf;
`;


export const Species = styled.h2 `
    font-weight: lighter;
    color: #4e2970;
    display: inline-block;
    margin: 0px 60px 15px 5px;
    max-width: 30px;
    
`;


export const Gender = styled.h2 `
    font-weight: lighter;
    color: #4e2970;
    display: inline-block;
    margin: 0px 5px 15px 60px;
    
`;


export const ImgCardContenedor = styled.img `
    filter: blur(0.4px);
    border-radius: 50%;
    max-width: 240px;
    max-height: 240px;
  
 
`;

export const CardContenedor = styled.div `
    border-radius: 16px;
    padding: 10px;
    margin-top: 10px;
    display: inline-block;
    background-color: #8b7f9c;
    font-family: 'Monaco', monospace;
    font-size: 13px;
    text-align: center;
    position: relative;
    max-width: 18rem;
    max-height: 27rem;

    color:#271438 ;
    &:hover {
        background: rgba(255, 255, 255, 0);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(15.6px);
        -webkit-backdrop-filter: blur(15.6px);
        border: 1px solid rgba(255, 255, 255, 0.3);   
        cursor: pointer;
        ${NameLink} { 
                color: #e6e3e8;
        }
        ${Species} { 
                color: #dccdf8;
        }
        ${Gender} { 
                color: #dccdf8 ;
        }
        ${CharId} { 
                color: #1d0f2a ;
                background-color: #dccdf8 ;
        }
         
        
}
    &:hover 
        
        ${CloseButtonCard} {
            color:#8b7f9c;
            position: absolute;
            top: 20px;
            right: 20px;
            margin: 9px ;
            background-color: transparent;
            border: none;
            color: whitesmoke;
            font-weight: bold;
            cursor: pointer;
        }
`;


export const HomeButton = styled.button`
  width: 150px;
  color: #1d0f2a;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  background-color: #cdb4db;
  margin-left: 190%;
  margin-top: 100px;
  cursor: pointer;
  &:hover {
    color: #8776a2;
  }
`;