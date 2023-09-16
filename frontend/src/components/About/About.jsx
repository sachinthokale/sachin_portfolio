import React from "react";
import "./About.css";
import { Typography } from "@mui/material";
import profilepic from "../../images/Picsart_23-08-25_18-57-21-058.jpg";

const About = ({ about }) => {
  return (
    <>
      <div className="about-container">
        <div className="about-container-1">
          <Typography>{about.quote}</Typography>
        </div>
        <div className="about-container-2">
          <div>
            <div className="about-avatar">
              <img src={about.avatar.url} alt="" />
            </div>
            <Typography style={{ color: "black" }} variant="h4">
              {about.name}
            </Typography>
            <Typography>{about.title}</Typography>
            <div className="xyz">
              <Typography>{about.description}</Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
