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
      title: "Job Title 1",
      company: "Company A",
      date: "2019 - Present",
      description1:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      description2:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      color: "#e86971",
    },
    {
      id: 2,
      title: "Job Title 2",
      company: "Company A",
      date: "2019 - Present",
      description1:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      description2:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      color: "#00796b",
    },
    {
      id: 3,
      title: "Job Title 3",
      company: "Company A",
      date: "2019 - Present",
      description1:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      description2:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      color: "#a4c8c0",
    },
    {
      id: 4,
      title: "Job Title 4",
      company: "Company A",
      date: "2019 - Present",
      description1:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
      description2:
        "Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla exercitation. Veniam velit adipisicing anim excepteur nostrud magna nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem est.",
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
