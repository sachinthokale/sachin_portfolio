import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteTimeline,
  getUser,
  updateTimeline,
} from "../../redux/actions/user";
import { clearErrors, clearMessages } from "../../redux/reducers/updateSlice";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import "./Timeline.css";

const Timeline = () => {
  const dispatch = useDispatch();
  const { message, error, loading } = useSelector((state) => state.update);
  const { user } = useSelector((state) => state.user);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  console.log(user);
  const submitHandler = async (e) => {
    e.preventDefault();
    await dispatch(updateTimeline(title, description, date));
    dispatch(getUser());
  };
  const deleteHandler = async (id) => {
    await dispatch(deleteTimeline(id));
    dispatch(getUser());
  };

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }

    if (message) {
      toast(message);
      dispatch(clearMessages());
    }
  }, [loading, message, error, dispatch]);

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
            placeholder="description"
            value={description}
            className="admin-panel-input"
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          <input
            type="date"
            placeholder="date"
            value={date}
            className="admin-panel-input"
            onChange={(e) => {
              setDate(e.target.value);
            }}
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
            user.timeline &&
            user.timeline.map((item) => (
              <div className="timeline" key={item._id}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1" style={{ letterSpacing: "2px" }}>
                  {item.description}
                </Typography>
                <Typography variant="body1" style={{ fontWeight: 600 }}>
                  {item.date.toString().split("T")[0]}
                </Typography>

                <Button
                  style={{
                    margin: "auto",
                    display: "block",
                    color: "rgba(40,40,40,0.7)",
                  }}
                  onClick={() => deleteHandler(item._id)}
                >
                  <FaTrash />
                </Button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
