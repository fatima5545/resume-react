import { Component } from "react";
import React from "react";
import "./Profile.css";
import { styled } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CustomTimeLine from "../Utils/CustomTimeLine";
import imageContent from "../../images/cv_photo.jpg";
import About from "../About/About";
const divName = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4,
});

export default class Profile extends Component {
  render() {
    return (
      <div className="profile" style={{ color: "black" }}>
        <div className="image-container">
          <img src={imageContent} alt="Your Alt Text" className="rounded-image" />
        </div>
        <About />
        {/* <div>
          <divName>Fatima NID-BAHDOU</divName>
        </div> */}
        <div>
          <div className="account_icon">
            <AccountCircleIcon style={{ color: "#00796b" }} />
          </div>
          <div className="timeline-position">
            <CustomTimeLine title="Name : fatimanidbahdou123@gmail.com" />
            <CustomTimeLine title="Téléphone : 0647362839" />
            <CustomTimeLine title="Email : fatimanidbahdou123@gmail.com" />
            <CustomTimeLine title="Github : fatimanidbahdou123@gmail.com" />
            <CustomTimeLine title="LinkedIn : fatimanidbahdou123@gmail.com" />
            <CustomTimeLine title="Adresse : fatimanidbahdou123@gmail.com" />
          </div>
        </div>
      </div>
    );
  }
}
