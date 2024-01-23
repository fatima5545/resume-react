import React, { useState } from "react";
import "./Resume.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import swimmingImage from "../../images/swimming.gif";
import travelingImage from "../../images/traveling.gif";
import travelingImageTwo from "../../images/traveling2.gif";
import chartImage from "../../images/meta-chart.png";
import ImageCarouseICard from "../Utils/ImageCarouselCard";
import Profile from "../Profile/Profile";
import Experience from "../Experience/Work";
import Education from "../Education/Education";
import CustomTimeLine from "../Utils/CustomTimeLine";
import CostomTimelineSeparator from "../Utils/CustomTimeLine";
import { TimelineDot, TimelineSeparator } from "@mui/lab/TimelineItem";
// import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

const Resume = () => {
  const experiences = [
    {
      title: "Registered IEE Member",
      date: "Oct 2020 - Present",
      description:
        "The IEEE Computer Society is the premier source for information, inspiration, and collaboration in computer science and engineering.  The Computer Society empowers the people who advance technology by delivering tools for individuals at all stages of their professional careers",
    },
    {
      title: "Brand Ambassador | IEEE",
      date: " May 2021  - Present",
      description:
        "The Institute of Electrical and Electronics Engineers is a professional association for electronic engineering and electrical engineering with its corporate office in New York City and its operations center in Piscataway, New Jersey.",
    },
    {
      title: "AWS Educate Member ",
      date: "Jul 2021 – Present",
      description:
        "Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.",
    },
  ];
  const images = [
    { image: swimmingImage, text: "Swimming" },
    { image: travelingImage, text: "Travelling" },
    { image: travelingImageTwo, text: "Travelling" },
  ];
  const [IsHoveredOne, SetIsHoveredOne] = useState(false);
  const [IsHoveredTwo, SetIsHoveredTwo] = useState(false);
  const [IsHoveredThree, SetIsHoveredThree] = useState(false);
  const [IsHoveredFour, SetIsHoveredFour] = useState(false);

  const handleMouseEnter = (cardNumber) => {
    if (cardNumber === "card-1") SetIsHoveredOne(true);
    else if (cardNumber === "card-2") SetIsHoveredTwo(true);
    else if (cardNumber === "card-3") SetIsHoveredThree(true);
    else if (cardNumber === "card-4") SetIsHoveredFour(true);
  };

  const handleMouseLeave = (cardNumber) => {
    if (cardNumber === "card-1") SetIsHoveredOne(false);
    else if (cardNumber === "card-2") SetIsHoveredTwo(false);
    else if (cardNumber === "card-3") SetIsHoveredThree(false);
    else if (cardNumber === "card-4") SetIsHoveredFour(false);
  };

  return (
    <div>
      <div
        id="profile"
        className="profile main_content container_shadow resume_content centering-elements"
      >
        <Profile />
      </div>
      <div id="experience" className="experience">
        <Experience />
      </div>
      <div id="education" className="education">
        <Education />
      </div>
    </div>
  );
};

export default Resume;
