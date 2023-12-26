import { Component } from "react";
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import "./CustomTimeLine.css";
import { Typography } from "@material-ui/core";
import { styled } from "@mui/material/styles";

const CustomTimelineSeparator = styled(TimelineSeparator)({
  "& .MuiTimelineDot-root": {
    backgroundColor: "#00796b",
  },
  "& .MuiTimelineConnector-line ": {
    backgroundColor: "#00796b",
  },
});

const CustomTimeLine = ({ title, value }) => {
  return (
    <Timeline>
      <TimelineItem>
        <CustomTimelineSeparator className="timeline-separator">
          <TimelineDot />
          <TimelineConnector />
        </CustomTimelineSeparator>
        <TimelineContent>
          <Typography variant="h10" className="typo-font">
            {title}
          </Typography>
          {/* : <p>{value}</p> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default CustomTimeLine;
