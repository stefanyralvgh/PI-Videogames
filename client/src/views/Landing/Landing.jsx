// import React from "react";
// import { LandingButton, LandingContainer, LandingImage, Overlay, Content, OverlayImage } from "./LandingStyles";
// import { useNavigate } from "react-router-dom";

// export default function Landing() {
//   const navigate = useNavigate();

//   function goHome() {
//     navigate("/home");
//   }

//   return (
//     <LandingContainer>
//       <LandingImage src="./Images/OIP.jpg" alt="Landing Image" />
//       <Overlay>
//       <OverlayImage src="./Images/OIP.jpg" alt="Overlay Image" />
//         <Content>
//           <h1>Bienvenido</h1>
//           <p>Tu mensaje de bienvenida aquí</p>
//           <LandingButton onClick={goHome}>Start</LandingButton>
//         </Content>
//       </Overlay>
//     </LandingContainer>
//   );
// }
import React from "react";
import { LandingButton, LandingContainer, LandingImage, Overlay, Content, OverlayImage } from "./LandingStyles";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  function goHome() {
    navigate("/home");
  }

  return (
    <LandingContainer>
      <LandingImage src="./Images/OIP.jpeg" alt="Landing Image" />
      <Overlay>
        <OverlayImage src="./Images/OIP2.png" alt="Overlay Image" />
        <Content>
          <h1>GAME ON</h1>
          <p>Your Gaming Journey Begins Here</p>
          <LandingButton onClick={goHome}>START</LandingButton>
        </Content>
      </Overlay>
    </LandingContainer>
  );
}
