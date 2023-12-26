import { Component } from "react";
import React from "react";
import Profile from "../Profile/Profile";
import NavBar from "../NavBar/NavBar";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";

export default class Home extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <div className="container">
          <div className="row">
            <div className="col s12 m8 l9">
              <Profile />
            </div>
            <div className="col s12 m8 l9">
              <About />
              <Skills />
              <Experience />
              <Education />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
