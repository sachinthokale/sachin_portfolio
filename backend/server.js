import { app } from "../backend/app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/DB.js";
import cloudinary from "cloudinary";

dotenv.config({ path: "./backend/config/config.env" });
connectDB();

cloudinary.v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
