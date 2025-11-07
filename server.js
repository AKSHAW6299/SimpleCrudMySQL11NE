// server.js
import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import db from "./config/db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Simple Node + Express + MySQL CRUD"));

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
