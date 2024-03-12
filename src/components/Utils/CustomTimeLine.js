import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import StarIcon from "@mui/icons-material/Star";
import "./CustomTimeLine.css"; // Import custom CSS

const CustomTimeLine = ({ experiences }) => {
  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <VerticalTimelineElement
          key={experience.id}
          contentStyle={{ backgroundColor: "#EAF1F0" }}
          contentArrowStyle={{ borderRight: "7px solid  #EAF1F0" }}
          date={experience.date}
          iconStyle={{ background: "#29726C", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            {experience.title}
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            {experience.company}
          </h4>
          <p>{experience.description1}</p>
          <p>{experience.description2}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default CustomTimeLine;
