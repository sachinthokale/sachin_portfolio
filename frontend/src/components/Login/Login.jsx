import React, { useEffect, useState } from "react";
import "./Login.css";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions/user";
import { toast } from "react-toastify";
import { clearMessages, clearErrors } from "../../redux/reducers/loginSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector((state) => state.login);

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    console.log("first");
    dispatch(login(email, password));
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
  }, [loading, message]);
  return (
    <div className="login">
      <div className="login-container">
        <form className="login-form" method="post" onClick={loginSubmitHandler}>
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
          <div>
            <input
              type="email"
              placeholder="Admin Email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <input
              type="password"
              placeholder="Admin Password"
              value={password}
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
