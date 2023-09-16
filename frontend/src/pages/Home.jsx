import React, { useEffect } from "react";
import "./Home.css";
import "../components/Skilldesc.css";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import moonTexture1 from "../images/moon-texture.jpg";
import moonDisplacementMap from "../images/moon-displacement.jpg";
import Introduction from "../components/Introduction";
import { Typography } from "@mui/material";
import Timeline1 from "../components/Timelines/Timeline1";
import dblogo from "../images/db.png";
import reactlogo from "../images/react.png";
import nodelogo from "../images/node.png";
import csslogo from "../images/css.png";
import gitlogo from "../images/git.png";
import expresslogo from "../images/express.png";
import Skilldesc from "../components/Skilldesc";
import { skillArr } from "../components/Logic/SkillInfo";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ThreeDRotation } from "@mui/icons-material";

const Home = ({ timeline, skills }) => {
  const scrollys = () => {
    window.scrollTo({ top: 400, left: 400, behavior: "smooth" });
  };

  useEffect(() => {
    let w;
    if (window.innerWidth < 800) {
      w = window.innerWidth;
    } else {
      w = window.innerWidth / 2;
    }
    let h = window.innerHeight;
    const scene = new THREE.Scene();
    const color1 = new THREE.Color("#001219");
    const camera = new THREE.PerspectiveCamera(25, w / h);
    const canvas = document.querySelector(".home-canvas");
    canvas.strokeStyle = "#000814";
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
    });
    const textureLoader = new THREE.TextureLoader();
    const moonTexture = textureLoader.load(moonTexture1);

    const displacementMap = textureLoader.load(moonDisplacementMap);
    camera.position.z = 20;

    const moonGeometry = new THREE.SphereGeometry(3, 64, 64);
    const moonMaterial = new THREE.MeshStandardMaterial({
      map: moonTexture,
      color: 0xffffff,
      displacementMap: displacementMap,
      displacementScale: 0.05,
      bumpMap: displacementMap,
      bumpScale: 0.04,
    });

    const pointLight = new THREE.DirectionalLight(0xffffff, 2);
    pointLight.position.set(100, 10, 5);
    const moon = new THREE.Mesh(moonGeometry, moonMaterial);
    const controller = new OrbitControls(camera, renderer.domElement);

    scene.add(moon);
    scene.background = color1;

    scene.add(pointLight);
    // scene.add(lightHelper);
    camera.position.z = 20;

    const animate = () => {
      requestAnimationFrame(animate);
      moon.rotation.y += 0.004;
      renderer.setSize(w, h);
      renderer.render(scene, camera);
    };
    animate();
  }, []);
  return (
    <>
      <div className="home">
        <canvas className="home-canvas" style={{ color: "#000814" }}></canvas>
        <div className="downArrwo" onClick={scrollys}>
          {" "}
          <ArrowDropDownIcon fontSize="large" />
        </div>
        <div className="intro">
          <Introduction />
        </div>
      </div>
      <div className="home-container">
        <h3>Timeline </h3>
        <Timeline1 timeline={timeline} />
      </div>

      <div className="home-skill" style={{ color: "white" }}>
        <Typography
          className="typography-skill"
          style={{
            color: "hsl(250, 100%, 75%)",
            width: "100%",
            fontFamily: "inherit",
          }}
          marginTop={-10}
          variant="h3"
        >
          Skills
        </Typography>

        <div className="skill-container">
          <div className="skill-left">
            {skillArr.map((item, key) => (
              <Skilldesc
                skillName={item.skillName}
                skillDesc={item.skillDesc}
                skillImg={item.skillImg}
                hcolor={item.hcolor}
                key={key}
              />
            ))}
          </div>
          <div className="skill-right">
            <div className="cube-skill">
              <div className="card" id="front">
                <img src={dblogo} alt="" />
              </div>
              <div className="card" id="back">
                <img src={reactlogo} alt="" />
              </div>
              <div className="card" id="left">
                <img src={nodelogo} alt="" />
              </div>
              <div className="card" id="right">
                <img src={csslogo} alt="" />
              </div>
              <div className="card" id="top">
                <img src={gitlogo} alt="" />
              </div>
              <div className="card" id="bottom">
                <img src={expresslogo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
