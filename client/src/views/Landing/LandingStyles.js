

import styled from "styled-components";

export const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;



export const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const OverlayImage = styled.img`
  width: 80%;
  height: 70%;
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.7;
  border: 1px solid yellowgreen;
  margin: -5px;
  
  border-top-right-radius: 5px; 
`;



export const Content = styled.div`
 font-family: serif;
  text-align: center;
  position: relative;

  h1 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 40px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
  z-index: 1;
  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }
 
`;

export const LandingButton = styled.button`
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: rgb(255, 255, 255);
  background: #111;
  cursor: pointer;
  position: relative;
  z-index: 0;
  border-radius: 10px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  
  &:before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    -webkit-filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing-button-85 20s linear infinite;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }

  @keyframes glowing-button-85 {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }

  &:after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: #222;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;

// export const LandingButton = styled.button`
//   appearance: button;
//   background-color: #000;
//   background-image: none;
//   border: 1px solid #000;
//   border-radius: 4px;
//   box-shadow: #fff 4px 4px 0 0, #000 4px 4px 0 1px;
//   box-sizing: border-box;
//   color: #fff;
//   cursor: pointer;
//   display: inline-block;
//   font-family: ITCAvantGardeStd-Bk, Arial, sans-serif;
//   font-size: 14px;
//   font-weight: 400;
//   line-height: 20px;
//   margin: 0 5px 10px 0;
//   overflow: visible;
//   padding: 12px 40px;
//   text-align: center;
//   text-transform: none;
//   touch-action: manipulation;
//   user-select: none;
//   -webkit-user-select: none;
//   vertical-align: middle;
//   white-space: nowrap;
//   &:focus {
//     text-decoration: none;
//   }
//   &:hover {
//     text-decoration: none;
//   }
//   &:active {
//     box-shadow: rgba(0, 0, 0, 0.125) 0 3px 5px inset;
//     outline: 0;
//   }
//   &:not([disabled]):active {
//     box-shadow: #fff 2px 2px 0 0, #000 2px 2px 0 1px;
//     transform: translate(2px, 2px);
//   }
//   @media (min-width: 768px) {
//     padding: 12px 50px;
//   }
// `;

