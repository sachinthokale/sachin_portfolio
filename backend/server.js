import { app } from "../backend/app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
import cloudinary from "cloudinary";
import path from "path";
import express from "express";

dotenv.config({ path: "./backend/config/config.env" });
connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  console.log("if running");
  app.use(express.static(path.join(__dirname1, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"));
  });
} else {
  console.log("not running");
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
