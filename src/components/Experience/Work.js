import React, { useState } from "react";
import "./Work.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import CustomTimeLine from "../Utils/CustomTimeLine";
import CostomTimelineSeparator from "../Utils/CustomTimeLine";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

const Work = () => {
  const myExperiences = [
    {
      id: 1,
      title: "Ingénieur logiciel",
      company: "Quanteam",
      date: "Oct 2021 - aujourd'hui",
      description1:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      description2:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      color: "#e86971",
    },
    {
      id: 2,
      title: "Ingénieur logiciel",
      company: "Societe Generale Corporate and Investment Banking - SGCIB",
      date: "Oct 2021 - Mars 2023",
      description1:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      description2:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      color: "#00796b",
    },
    {
      id: 3,
      title: "Ingénieur logiciel et visualisation de données",
      company: "Ortix",
      date: "Sept 2020 - Sept 2021",
      description1:
        "Développement d'un logiciel de traçabilité agricole automatique sans saisie.",
      description2:
        "Etude, analyse et intégration des outils d'analyses et de visualization dans le logiciel.",
      color: "#a4c8c0",
    },
    {
      id: 4,
      title: "Stage",
      company: "Michelin",
      date: "Avr 2020 - Août 2020",
      description1:
        "Développement d'un outil de conception des tissus textiles à partir des entrevues des différents concepteurs utilisateurs afin d'hiérarchiser leurs besoins dans le monde de textile.",
      description2:
        "Modifier des fonctionnalités et ajouter d'autres pour un prototype des tissus métalliques qui existe déjà . Ajouter des évolutions ergonomiques",
      color: "#daac9a",
    },
    // Add more experiences here
  ];
  const [IsHoveredOne, SetIsHoveredOne] = useState(false);
  const [IsHoveredTwo, SetIsHoveredTwo] = useState(false);

  const handleMouseEnter = (cardNumber) => {
    if (cardNumber === "card-1") SetIsHoveredOne(true);
    else if (cardNumber === "card-2") SetIsHoveredTwo(true);
  };

  const handleMouseLeave = (cardNumber) => {
    if (cardNumber === "card-1") SetIsHoveredOne(false);
    else if (cardNumber === "card-2") SetIsHoveredTwo(false);
  };

  return (
    <div>
      <div className="experience">
        <CustomTimeLine experiences={myExperiences} />
      </div>
    </div>
  );
};

export default Work;
