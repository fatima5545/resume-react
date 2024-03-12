import React from "react";
import "./About.css";
import Particle from "../Utils/Particles/tsparticles";
import imageContent from "../../images/cv_photo.jpg";

const About = () => {
  return (
    // <div class="wrapper">
    //   <div class="profile">
    //     <div class="overlay">
    //       <div class="about-me d-flex flex-column">
    //         <h4>Kim Sarah</h4> <span>Software Developer</span>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div class="row d-flex justify-content-center">
        <div class="mt-5 col-md-7">
          <div class="card-list p-3 py-4">
            <div class="text-center">
              <img src={imageContent} width="200" class="rounded-circle" />
            </div>

            <div class="text-center mt-3">
              <span class="bg-secondary p-1 px-4 rounded text-white">Pro</span>
              <h5 class="mt-2 mb-0">Fatima NID-BAHDOU</h5>
              <span>Développeuse Full Stack</span>

              <div class="px-4 mt-1">
                <p class="fonts">
                  Bonjour et bienvenue sur mon portfolio ! Je m'appelle Fatima
                  NID-BAHDOU et je suis une développeuse web passionnée avec 3
                  ans d'expérience dans la création de solutions web innovantes
                  et performantes. Spécialisée en Full Stack, j'ai un solide
                  bagage technique et une réelle passion pour le développement
                  web.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
