import React, { useState } from "react";
// import ParticleEffectButton from "react-particle-effect-button";
import Button from "@mui/material/Button";
import "./buttonparticles.css";
const ParticleButton = ({ buttonText, buttonVariant, buttonStyle }) => {
  const [hidden, setHidden] = useState(false);

  const handleClick = () => {
    setHidden(true);
    setTimeout(() => setHidden(false), 100);
  };

  return (
    // <ParticleEffectButton
    //   color={buttonVariant === "contained" ? "#00796b" : "white"}
    //   hidden={hidden}
    //   duration={1000}
    // >
    //   <Button variant={buttonVariant} onClick={handleClick} style={buttonStyle}>
    //     {buttonText}
    //   </Button>
    // </ParticleEffectButton>
    <a class="btn-slice" href="#">
      <div class="top">
        <span>{buttonText}</span>
      </div>
      <div class="bottom">
        <span>{buttonText}</span>
      </div>
    </a>
  );
};

export default ParticleButton;
