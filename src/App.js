import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import { Container, Grid } from "@material-ui/core";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/skills" element={<Skills />} />
    //     <Route path="/education" element={<Education />} />
    //     <Route path="/experience" element={<Experience />} />
    //   </Routes>
    // </Router>
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs={12} sm={12} lg={3}>
          <div className="main_content container_shadow">
            <Profile />
          </div>
        </Grid>
        <Grid item xs>
          <Router>
            <NavBar />
            <div className="main_content container_shadow resume_content">
              <Resume />
            </div>
            {/* <div className="main_content container_shadow">
              <Routes>
                <Route path="/about" element={<About />} />
              </Routes>
            </div> */}
          </Router>
          {/* <Footer /> */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
