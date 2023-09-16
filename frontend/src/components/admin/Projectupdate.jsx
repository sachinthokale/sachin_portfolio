import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ProjectCard from "../Projects/ProjectCard";
import {
  deleteProject,
  deleteTimeline,
  getUser,
  updateProject,
  updateTimeline,
} from "../../redux/actions/user";
import { clearErrors, clearMessages } from "../../redux/reducers/updateSlice";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { trusted } from "mongoose";

const Projectupdate = () => {
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.update);
  const { message: loginMessage } = useSelector((state) => state.login);
  const { user } = useSelector((state) => state.user);

  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateProject(url, title, image, description, techStack));
    dispatch(getUser());
  };
  const deleteHandler = async (id) => {
    await dispatch(deleteProject(id));
    dispatch(getUser());
  };
  const handleImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        setImage(reader.result);
      }
    };
  };

  return (
    <div className="admin-panel">
      <div className="admin-panel-container">
        <Typography variant="h4">
          <p>A</p>
          <p>D</p>
          <p>M</p>
          <p>I</p>
          <p style={{ marginRight: "1.2vmax" }}>N</p>
          <p>P</p>
          <p>A</p>
          <p>N</p>
          <p>E</p>
          <p>L</p>
        </Typography>
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="title"
            value={title}
            className="admin-panel-input"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Link"
            value={url}
            className="admin-panel-input"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Tech-Stack"
            value={techStack}
            className="admin-panel-input"
            onChange={(e) => {
              setTechStack(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="description"
            value={description}
            className="admin-panel-input"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="file"
            accept="image/*"
            className="admin-panel-input"
            onChange={handleImage}
          />

          <Link to="/account">
            BACK <MdKeyboardBackspace />{" "}
          </Link>

          <Button type="submit" variant="contained" disabled={loading}>
            Add
          </Button>
        </form>
        <div className="adminpanel-timeline">
          {user &&
            user.projects &&
            user.projects.map((item) => (
              <ProjectCard
                key={item._id}
                id={item._id}
                url={item.url}
                projectImage={item.image.url}
                projectTitle={item.title}
                technologies={item.techStack}
                description={item.description}
                isAdmin={true}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projectupdate;
