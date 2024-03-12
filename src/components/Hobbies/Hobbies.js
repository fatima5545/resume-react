import React, { useEffect, useRef, useState } from "react";
import "./Hobbies.css"; // Assurez-vous d'avoir le fichier de style
import swimmingImage from "../../images/swimming-2.gif";
import GrowingAppearance from "../Utils/GrowingAppearance";
const Hobbies = ({ src, alt }) => {
  return (
    <div class="containerm">
      <div class="row">
        <div class="col-md-4">
          <div class="image-element">
            {" "}
            <img
              className="img-content"
              src="https://www.uffmag.com/uk/wp-content/uploads/viajes.gif"
              alt=""
            />{" "}
            <i class="i-class fa fa-search fa-3x"></i>{" "}
          </div>
        </div>
        <div class="col-md-4">
          <div class="image-element">
            {" "}
            <img
              className="img-content"
              src="https://i.imgur.com/MMfaOcL.jpg"
              alt=""
            />{" "}
            <i class="i-class fa fa-search fa-3x"></i>{" "}
          </div>
        </div>
        <div class="col-md-4">
          <div class="image-element">
            {" "}
            <img
              className="img-content"
              src="https://i.imgur.com/nOeI05p.jpg"
              alt=""
            />{" "}
            <i class="i-class fa fa-search fa-3x"></i>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
