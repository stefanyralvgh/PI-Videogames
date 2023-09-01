import React from "react";
import { LandingImage, LandingButton } from "./LandingStyles";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  return (
    <div>
      <LandingButton onClick={goHome}>Go home</LandingButton>
      <LandingImage src="./Images/OIP.png" alt="Landing Image" />
    </div>
  );
}
