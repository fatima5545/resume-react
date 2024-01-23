import React from "react";
import "./Profile.css";
import { styled } from "@mui/system";
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

const Profile = () => {
  return (
    <div className="profile" style={{ backgroundColor: "white" }}>
      <div class="project">
        <div class="diagonal badge">Développeuse Web</div>
      </div>
      <div className="image-container">
        <img src={imageContent} alt="Your Alt Text" className="rounded-image" />
      </div>
      <div>
        <div className="account_icon">
          <AccountCircleIcon style={{ color: "#00796b" }} />
        </div>
        <About />
        {/* <div className="timeline-position">
          <CustomTimeLine title="Name : Fatima NID-BAHDOU" />
          <CustomTimeLine title="Téléphone : 0647362839" />
          <CustomTimeLine title="Email : fatimanidbahdou123@gmail.com" />
          <CustomTimeLine title="Github : fatimanidbahdou123" />
          <CustomTimeLine title="LinkedIn : fatimanidbahdou123" />
          <CustomTimeLine title="Adresse : Your Address" />
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
