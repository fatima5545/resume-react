import { Component } from "react";
import React from "react";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="container-content">
       <div className="about-text">
          <div className="summary-content">À propos de moi</div>
          <p>
            Je suis un ingénieur passionné du développement logiciel avec une expertise de trois ans dans le domaine du
            développement fullstack. Mon parcours professionnel m'a permis d'acquérir des compétences approfondies dans
            les technologies modernes telles que Angular, React, Vue.js et Python.
          </p>
        </div>
      </div>
    );
  }
}
