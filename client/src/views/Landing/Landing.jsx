import React from "react";
import {
  LandingButton,
  LandingContainer,
  LandingImage,
  Overlay,
  Content,
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
      <LandingImage src="./Images/OIP2.GIF" alt="Landing Image" />
      <Overlay>
        <Content>
          <LandingTitle>GAME ON</LandingTitle>
          <LandingSubtitle>Find your favorite games in one place!</LandingSubtitle>
          <LandingButton onClick={goHome}>EXPLORE</LandingButton>
        </Content>
      </Overlay>
    </LandingContainer>
  );
}
