import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Contact.css";
import { contactUs } from "../../redux/actions/user";
import { toast } from "react-toastify";
import { clearErrors, clearMessages } from "../../redux/reducers/loginSlice";

const Contact = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const {
    error,
    message: contMessage,
    loading,
  } = useSelector((state) => state.update);

  const contactFormHandler = (e) => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  useEffect(() => {
    if (error) {
      toast(error);
      dispatch(clearErrors());
    }
    if (contMessage) {
      toast(contMessage);
      dispatch(clearMessages());
    }
  }, [alert, error, contMessage, dispatch]);

  return (
    <div className="contact">
      <div className="right-contact"></div>
      <div className="contact-container">
        <form
          action=""
          onSubmit={contactFormHandler}
          className="contact-container-form"
        >
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="text"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
