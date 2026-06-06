import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { Pool } from "pg";
import jwt from "jsonwebtoken";
import authRoutes from "./routes/authRoutes.js";

dotenv.config(); //it makes sure that process.env contains the variables defined in the .env file

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json(
    "Hello from the AI Expense Tracker backend! The server is up and running!",
  );
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
