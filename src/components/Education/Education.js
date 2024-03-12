import React, { useState } from "react";
import "./Education.css";
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

const Education = () => {
  const myExperiences = [
    {
      id: 1,
      title: "ISIMA",
      company: "Clermont Ferrand - France",
      date: "Sept 2019 - Sept 2021",
      description1:
        "Élève ingénieur en ISIMA, l'Institut Supérieur d'Informatique, de Modélisation et de leurs Applications",
      description2:
        "Option : Génie logiciel et systèmes informatiques (double diplôme)",
      color: "#e86971",
    },
    {
      id: 2,
      title: "ENSIAS",
      company: "Rabat - Maroc",
      date: "Sept 2017 - Sept 2021",
      description1:
        "Élève ingénieur en ENSIAS, l'École nationale supérieure d'informatique et analyse des systèmes",
      description2: "Option : e-Management and Business Intelligence",
      color: "#00796b",
    },
    {
      id: 3,
      title: "FSTS",
      company: "Settat - Maroc",
      date: "Sept 2014 - Juin 2017",
      description1: "DEUST en Faculté des sciences et techniques",
      description2: "Option : Mathématiques, Informatique et physique",
      color: "#a4c8c0",
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

export default Education;
