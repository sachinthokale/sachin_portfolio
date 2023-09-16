import React from "react";
import "./Project.css";
import { Typography } from "@mui/material";
import { AiOutlineProject } from "react-icons/ai";
import ProjectCard from "./ProjectCard";

const Project = ({ projects }) => {
  // const projects = [1, 2, 3, 4];
  return (
    <div className="project">
      <Typography variant="h3">
        Projects <AiOutlineProject />{" "}
      </Typography>
      <div className="projectwrapper">
        {projects.map((item) => (
          <ProjectCard
            id={item._id}
            key={item._id}
            url={item.url}
            projectImage={item.image.url}
            projectTitle={item.title}
            description={item.description}
            technologies={item.techStack}
            github="https://github.com/sachinthokale/MERN-CHAT-APP"
          />
        ))}
      </div>
      <Typography variant="h4">
        All The Project Shown Above Are Made By Me. <AiOutlineProject />{" "}
      </Typography>
    </div>
  );
};

export default Project;
