import React, { useEffect, useRef, useState } from "react";
import "./Hobbies.css"; // Assurez-vous d'avoir le fichier de style
import swimmingImage from "../../images/swimming-2.gif";
import GrowingAppearance from "../Utils/GrowingAppearance";
const Hobbies = ({ src, alt }) => {
  return (
    <div className="hobbies">
      <div className="row">
        <div className="col">
          <div className="card-hobbie">
            <GrowingAppearance src={swimmingImage} alt="Votre Image" />
          </div>
        </div>
        <div className="col">
          <div className="card-hobbie">
            <GrowingAppearance src={swimmingImage} alt="Votre Image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
