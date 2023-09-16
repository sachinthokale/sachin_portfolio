import { Delete } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import React from "react";
import "./ProjectCard.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject, getUser } from "../../redux/actions/user";
import { toast } from "react-toastify";

const ProjectCard = ({
  url,
  id,
  projectImage,
  projectTitle,
  description,
  technologies,
  github,
  isAdmin,
}) => {
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.update);
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    if (message) {
      toast(message);
    }
    dispatch(getUser());
  };

  return (
    <>
      <div className="project-card-a">
        <a href={url} className="project-card" target="blank">
          <div>
            <div className="project-image">
              <img src={projectImage} alt="Projects" />
            </div>
            <Typography variant="h5">{projectTitle}</Typography>
          </div>
          <div>
            <Typography variant="h4" style={{ color: "black" }}>
              About Project
            </Typography>
            {/* <Typography className="desc">{description}</Typography> */}
            <span>{description}</span>
            <Typography variant="h6">Tech Stack : {technologies}</Typography>
          </div>
        </a>
        {isAdmin && (
          <Button
            onClick={() => deleteHandler(id)}
            style={{ color: "rgba(40,40,40,0.7)" }}
          >
            <Delete />\
          </Button>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
