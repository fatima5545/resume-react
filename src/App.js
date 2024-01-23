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
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ParticleButton from "./components/Utils/Particles/buttonparticles";
function App() {
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
          <div className="div-person">
            <p className="person">Hello ! This is Fatima NID-BAHDOU</p>
          </div>
          <p className="job">WEB DEVELOPER</p>
          <Stack spacing={2} direction="row">
            <ParticleButton
              buttonText="DOWNLOAD CV"
              buttonVariant="contained"
              buttonStyle={{ backgroundColor: "#00796b", color: "white" }}
            />
            <ParticleButton
              buttonText="HIRE ME"
              buttonVariant="outlined"
              buttonStyle={{ borderColor: "white", color: "white" }}
            />
          </Stack>
          <Box
            className="icons"
            sx={{ display: "flex", flexGrow: 1, justifyContent: "flex-end" }}
          >
            <a href="/" target="_blank">
              <FacebookIcon style={{ color: "white", marginRight: 8 }} />
            </a>
            <a href="/" target="_blank">
              <TwitterIcon style={{ color: "white", marginRight: 8 }} />
            </a>
            <a href="/" target="_blank">
              <LinkedInIcon style={{ color: "white", marginRight: 8 }} />
            </a>
            <a href="/" target="_blank">
              <GitHubIcon style={{ color: "white", marginRight: 8 }} />
            </a>
          </Box>
        </div>
      </div>
      <div id="aboutt" className="aboutt">
        <About />
      </div>
      <div id="experience" className="experience">
        <Work />
      </div>
      <div id="hobbies" className="hobbies">
        <Hobbies />
      </div>
      <div id="education" className="education">
        <Education />
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
