import { Component } from "react";
import React from "react";
import "./About.css";
export default class About extends Component {
  render() {
    return (
      <div className="container">
        <div className="about-text">
          <h1>À propos de moi</h1>
          <p>
            Je suis un ingénieur passionné du développement logiciel avec une expertise de trois ans dans le domaine du
            développement fullstack. Mon parcours professionnel m'a permis d'acquérir des compétences approfondies dans
            les technologies modernes telles que Angular, React, Vue.js et Python.
          </p>
          <p>
            Au cours de ma carrière, j'ai travaillé sur des projets variés, allant de la conception et du développement
            d'applications web dynamiques à la création de solutions robustes côté serveur. Ma polyvalence me permet de
            m'adapter rapidement aux nouvelles technologies et de résoudre efficacement les défis complexes du
            développement logiciel.
          </p>
          <p>
            En tant qu'ingénieur passionné par l'innovation, j'aime explorer de nouvelles idées et trouver des solutions
            créatives pour optimiser les performances et améliorer l'expérience utilisateur. Mon engagement envers le
            code propre, la qualité et la collaboration efficace font de moi un membre précieux de toute équipe de
            développement. Mon objectif est de continuer à élargir mes compétences et à contribuer au développement de
            solutions logicielles exceptionnelles. Je suis enthousiaste à l'idée de participer à des projets stimulants
            et d'apporter une valeur ajoutée grâce à mon expertise technique et ma passion pour l'excellence dans le
            développement logiciel.
          </p>
        </div>
      </div>
    );
  }
}
