import React from "react";
import {
  LandingButton,
  LandingContainer,
  LandingImage,
  Overlay,
  Content,
  OverlayImage,
  LandingTitle,
  LandingSubtitle,
} from "./LandingStyles";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  return (
    <LandingContainer>
      <LandingImage src="./Images/OIP.jpg" alt="Landing Image" />
      <Overlay>
        <OverlayImage src="./Images/OIP.jpg" alt="Overlay Image" />
        <Content>
          <LandingTitle>GAME ON</LandingTitle>
          <LandingSubtitle>Your Gaming Journey Begins Here</LandingSubtitle>
          <LandingButton onClick={goHome}>DISCOVER GAMES</LandingButton>
        </Content>
      </Overlay>
    </LandingContainer>
  );
}
