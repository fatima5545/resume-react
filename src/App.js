import React from "react";
import Box from "@mui/material/Box";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Work from "./components/Experience/Work";
import Hobbies from "./components/Hobbies/Hobbies";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import AboutMe from "./components/About/About";
import Competence from "./components/Competence/competence";
import Contact from "./components/Contact/contact";
import Resume from "./components/Resume/Resume";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ParticleButton from "./components/Utils/Particles/buttonparticles";
function App() {
  const downloadCV = () => {
    // Remplacez 'chemin/vers/votre/cv.pdf' par le chemin d'accès réel à votre fichier PDF
    const pdfUrl = "chemin/vers/votre/cv.pdf";

    // Créez un élément <a> pour déclencher le téléchargement
    const link = document.createElement("a");
    link.href = pdfUrl;

    // Spécifiez que le téléchargement doit être forcé et donnez un nom au fichier
    link.setAttribute("download", "votre_cv.pdf");

    // Ajoutez le lien à la page et déclenchez le clic pour démarrer le téléchargement
    document.body.appendChild(link);
    link.click();

    // Supprimez le lien de la page une fois le téléchargement terminé
    document.body.removeChild(link);
  };

  const scrollToSection = () => {
    alert("hello");
    const hireSection = document.getElementById("contact");
    if (hireSection) {
      hireSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/skills" element={<Skills />} />
    //     <Route path="/education" element={<Education />} />
    //     <Route path="/experience" element={<Work />} />
    //   </Routes>
    // </Router>
    <div>
      <div className="color-background">
        <div className="elements-background">
          <NavBar />
        </div>
        <div className="elements-background">
          {/*Premier style  */}
          {/* <div
            id="profile"
            className="profile main_content container_shadow resume_content centering-elements"
          >
            <Profile />
          </div> */}

          {/*deuxieme style  */}
          {/* <div className="div-person">
            <p className="person">Hello ! This is Fatima NID-BAHDOU</p>
          </div> */}
          {/* <p className="job">WEB DEVELOPER</p> */}
          <div class="wrapper-class">
            <a href="#">WEB DEVELOPER</a>
          </div>
          <Stack spacing={8} direction="row">
            <ParticleButton
              buttonText="DOWNLOAD CV"
              buttonVariant="contained"
              buttonStyle={{ backgroundColor: "#00796b", color: "white" }}
              onClick={downloadCV}
            />
            <ParticleButton
              buttonText="HIRE ME"
              buttonVariant="outlined"
              buttonStyle={{ borderColor: "white", color: "white" }}
              onClick={scrollToSection}
            />
          </Stack>
          <Box
            className="icons"
            sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          >
            <ul class="wrapper">
              <li class="icon facebook">
                <span class="tooltip">Facebook</span>
                <span>
                  <i class="fab fa-facebook-f"></i>
                </span>
              </li>
              <li class="icon twitter">
                <span class="tooltip">Twitter</span>
                <span>
                  <i class="fab fa-twitter"></i>
                </span>
              </li>
              <li class="icon instagram">
                <span class="tooltip">Instagram</span>
                <span>
                  <i class="fab fa-instagram"></i>
                </span>
              </li>
              <li class="icon github">
                <span class="tooltip">Github</span>
                <span>
                  <i class="fab fa-github"></i>
                </span>
              </li>
              <li class="icon youtube">
                <span class="tooltip">Youtube</span>
                <span>
                  <i class="fab fa-youtube"></i>
                </span>
              </li>
            </ul>
          </Box>
        </div>
      </div>
      <div id="about" className="about">
        <AboutMe />
      </div>
      <div id="experience" className="experience">
        <Work />
      </div>
      <div id="competence" className="competence">
        <Competence />
      </div>
      <div id="hobbies" className="hobbies">
        <Hobbies />
      </div>
      <div id="education" className="education">
        <Education />
      </div>
      <div id="contact" className="contact">
        <Contact />
      </div>
      {/* <Grid container spacing={7}> */}
      {/* <Grid item xs={12} sm={12} lg={3}> */}
      {/* <div className="main_content container_shadow">
            <Profile />
          </div> */}
      {/* </Grid> */}
      {/* <Grid item xs> */}
      {/* <Router> */}
      {/* <NavBar /> */}
      {/* <div className="main_content container_shadow resume_content">
              <Resume />
            </div> */}
      {/* <div className="main_content container_shadow">
              <Routes>
                <Route path="/about" element={<About />} />
              </Routes>
            </div> */}
      {/* </Router> */}
      {/* <Footer /> */}
      {/* </Grid> */}
      {/* </Grid> */}
    </div>
  );
}

export default App;
