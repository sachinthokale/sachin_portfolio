import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineProject } from "react-icons/ai";
import { MdTimeline } from "react-icons/md";
import "./AdminPanel.css";
import { useDispatch, useSelector } from "react-redux";
import { logout, updateUser } from "../../redux/actions/user";
import { toast } from "react-toastify";
import { clearErrors, clearMessages } from "../../redux/reducers/loginSlice";
const AdminPanel = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [about, setAbout] = useState({});
  const [skills, setSkills] = useState({});
  const { message: loginMessage } = useSelector((state) => state.login);
  const { loading, message, error } = useSelector((state) => state.update);

  const handleImages = (e, val) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      if (reader.readyState === 2) {
        if (val === 1) {
          setSkills({ ...skills, image1: reader.result });
        }
        if (val === 2) {
          setSkills({ ...skills, image2: reader.result });
        }
        if (val === 3) {
          setSkills({ ...skills, image3: reader.result });
        }
        if (val === 4) {
          setSkills({ ...skills, image4: reader.result });
        }
        if (val === 5) {
          setSkills({ ...skills, image5: reader.result });
        }
        if (val === 6) {
          setSkills({ ...skills, image6: reader.result });
        }
      }
    };
  };

  const handleAboutImage = (e) => {
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      if (reader.readyState === 2) {
        setAbout({ ...about, avatar: reader.result });
      }
    };
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUser(name, email, password, skills, about));
    console.log(name);
  };
  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }
    if (loginMessage) {
      toast(loginMessage);
      dispatch(clearErrors());
    }
    if (message) {
      toast(message);
      dispatch(clearMessages());
    }
  }, [loading, message, error]);
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
            placeholder="Name"
            value={name}
            className="admin-panel-input"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            className="admin-panel-input"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            className="admin-panel-input"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div className="admin-panel-skill">
            <div>
              <Typography>SKILL 1</Typography>
              <input
                type="file"
                className="admin-panel-fileInput"
                onChange={(e) => {
                  handleImages(e, 1);
                }}
                accept="image/*"
              />
            </div>
            <div>
              <Typography>SKILL 2</Typography>
              <input
                type="file"
                className="admin-panel-fileInput"
                onChange={(e) => {
                  handleImages(e, 2);
                }}
                accept="image/*"
              />
            </div>
            <div>
              <Typography>SKILL 3</Typography>
              <input
                type="file"
                className="admin-panel-fileInput"
                onChange={(e) => {
                  handleImages(e, 3);
                }}
                accept="image/*"
              />
            </div>
            <div>
              <Typography>SKILL 4</Typography>
              <input
                type="file"
                className="admin-panel-fileInput"
                onChange={(e) => {
                  handleImages(e, 4);
                }}
                accept="image/*"
              />
            </div>
            <div>
              <Typography>SKILL 5</Typography>
              <input
                type="file"
                className="admin-panel-fileInput"
                onChange={(e) => {
                  handleImages(e, 5);
                }}
                accept="image/*"
              />
            </div>
            <div>
              <Typography>SKILL 6</Typography>
              <input
                type="file"
                className="admin-panel-fileInput"
                onChange={(e) => {
                  handleImages(e, 6);
                }}
                accept="image/*"
              />
            </div>
          </div>
          <div className="admin-panel-about">
            <fieldset>
              <legend>About</legend>
              <input
                type="text"
                className="admin-panel-input"
                placeholder="Name"
                value={about.name}
                onChange={(e) => {
                  setAbout({ ...about, name: e.target.value });
                }}
              />
              <input
                type="text"
                className="admin-panel-input"
                placeholder="Title"
                value={about.title}
                onChange={(e) => {
                  setAbout({ ...about, title: e.target.value });
                }}
              />
              <input
                type="text"
                className="admin-panel-input"
                placeholder="Subtitle"
                value={about.subtitle}
                onChange={(e) => {
                  setAbout({ ...about, subtitle: e.target.value });
                }}
              />
              <input
                type="text"
                className="admin-panel-input"
                placeholder="Description"
                value={about.description}
                onChange={(e) => {
                  setAbout({ ...about, description: e.target.value });
                }}
              />
              <input
                type="text"
                className="admin-panel-input"
                placeholder="Quote"
                value={about.quote}
                onChange={(e) => {
                  setAbout({ ...about, quote: e.target.value });
                }}
              />
              <input
                type="file"
                onChange={handleAboutImage}
                className="admin-panel-fileInput"
                placeholder="Choose Avatarr"
                accept="image/*"
              />
            </fieldset>
          </div>
          <Link to="/admin/timeline">
            TIMELINE <MdTimeline />{" "}
          </Link>
          <Link to="/admin/project">
            PROJECTS <AiOutlineProject />{" "}
          </Link>
          <Button type="submit" variant="contained" disabled={loading}>
            Update
          </Button>
        </form>
        <Button
          color="error"
          variant="contained"
          style={{ display: "block", margin: "4vmax auto" }}
          onClick={logoutHandler}
        >
          logout
        </Button>
      </div>
    </div>
  );
};

export default AdminPanel;
