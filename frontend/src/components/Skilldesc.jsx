import React, { useState } from "react";
import "../pages/Home.css";
import "./Skilldesc.css";
import webBanner from "../images/webBanner.jpg";
import { Button } from "@mui/material";

const Skilldesc = ({ skillName, skillDesc, skillImg, hcolor }) => {
  return (
    <div className="skill-desc-container">
      <div className="webBanner">
        <img src={skillImg} alt="" />
      </div>

      <div className="bannerInfo">
        <h4 style={{ color: hcolor, fontSize: "1.4vmax" }}>{skillName}</h4>
        <span style={{ fontSize: "1vmax" }}> {skillDesc}</span>
      </div>
    </div>
  );
};

export default Skilldesc;
