import styled from "styled-components";

export const LandingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-color: #5b5f97;
`;

export const LandingImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.8;
`;

export const OverlayImage = styled.div` 
  object-fit: cover;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.5;  
`;

export const Content = styled.div`
  font-family: 'Chakra Petch', sans-serif;
  text-align: center;
  position: relative;
`;

export const LandingTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: white; 
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`;

export const LandingSubtitle = styled.p`
  font-size: 24px;
  margin-bottom: 50px;
  color: #fffffb; 
  font-weight: bolder;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #dadcdd; 
  box-shadow: 0 0 20px rgba(0, 255, 0, 0.8);
  z-index: 1;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

export const LandingButton = styled.button`
  z-index: 0;
  background-color: #002bff;
  padding: 0.6em 2em;
  border: none;
  outline: none;
  color: #dadcdd; 
  cursor: pointer;
  position: relative;
  border-radius: 10px;
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 2px;

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
    background: #86a3a8;
    left: 0;
    top: 0;
    border-radius: 10px;
  }
`;
