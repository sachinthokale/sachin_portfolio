import React from "react";

//importing typewriter-effect
import Typewriter from "typewriter-effect";
import "./Introduction.css";
import { Style } from "@mui/icons-material";
import { Color } from "three";

function Introduction() {
  return (
    <div className="introduction">
      <h1>
        <span style={{ color: "white" }}> I Am</span>{" "}
        <Typewriter
          className="aaa"
          onInit={(typewriter) => {
            typewriter
              .typeString("Sachin")
              .pauseFor(1000)
              .deleteAll()
              .typeString("React-Developer")
              .pauseFor(1000)
              .deleteAll()
              .typeString("MERN Stack Develper")
              .pauseFor(1000)
              .deleteAll()
              .typeString("Sachin")

              .start();
          }}
        />
      </h1>
      <p>
        I'm a Web Developer with extensive experience for over 5 years. My
        expertise is to create and Websites design, graphic design and many
        more...
      </p>
    </div>
  );
}

export default Introduction;
