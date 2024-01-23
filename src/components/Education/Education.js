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
// import WorkIcon from "@material-ui/icons/Work";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";

const Education = () => {
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
      <div id="education" className="education">
        <div className="row">
          <div className="col">
            <div
              className={`card ${IsHoveredOne ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter("card-1")}
              onMouseLeave={() => handleMouseLeave("card-1")}
            >
              {!IsHoveredOne && (
                <div className="card-content">
                  <p>Developer</p>
                  <p>Profile</p>
                  <p>Demo</p>
                  <div className="location-content">
                    <LocationOnIcon className="color-icon" />
                    <p className="location-font">Ile de France</p>
                  </div>
                  <div className="about-content">
                    <p className="location-font">A propos de moi</p>
                    <ArrowForwardIcon className="color-icon" />
                  </div>
                </div>
              )}
              {IsHoveredOne && (
                <Box
                  component="main"
                  sx={{
                    p: 3,
                    overflowY: "auto", // Enable vertical scrolling
                    maxHeight: "400px", // Set a maximum height for scrolling
                  }}
                >
                  {" "}
                  <div className="card-content">
                    <p>Qui suis-je ?</p>
                  </div>
                  <Toolbar />
                  <p className="card-scroll">
                    Ingénieur passionné du développement logiciel avec une
                    expertise de trois ans dans le domaine du développement.
                  </p>
                  <div className="card-content">
                    <p>Années d'études</p>
                  </div>
                  <p className="card-scroll">
                    Deux diplômes d'ingénieur en informatique
                  </p>
                </Box>
              )}
            </div>
          </div>

          <div className="col">
            <div
              className={`card card-2 ${IsHoveredTwo ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter("card-2")}
              onMouseLeave={() => handleMouseLeave("card-2")}
            >
              {!IsHoveredTwo && (
                <div className="card-content">
                  <div className="business-icon">
                    <BusinessCenterIcon
                      className="white-color-icon"
                      style={{ fontSize: "10rem" }}
                    />
                  </div>
                  <div className="about-content">
                    <p className="location-font location-color">Voir plus</p>
                    <ArrowForwardIcon className="white-color-icon" />
                  </div>
                </div>
              )}
              {IsHoveredTwo && (
                <Box
                  component="main"
                  sx={{
                    p: 3,
                    overflowY: "auto", // Enable vertical scrolling
                    maxHeight: "400px", // Set a maximum height for scrolling
                  }}
                >
                  <div>
                    {/* <CustomTimeLine title={"Experiences"} icon={<WorkIcon />}>
                      {experiences.map((Experiences) => (
                        <TimelineItem>
                          <CostomTimelineSeparator />
                          <TimelineContent className={"timeline_content"}>
                            <Typography className={"timeline_title"}>
                              {Experiences.title}
                            </Typography>
                            <Typography
                              variant={"caption"}
                              className={"timeline_date"}
                            >
                              {Experiences.date}
                            </Typography>
                            <Typography
                              variant={"body2"}
                              className={"timeline_description"}
                            >
                              {Experiences.description}
                            </Typography>
                          </TimelineContent>
                        </TimelineItem>
                      ))}
                    </CustomTimeLine> */}
                  </div>
                </Box>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
