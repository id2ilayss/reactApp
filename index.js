/*import { Express } from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
*/

const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();
const cors = require("cors");
app.use(cors());

//connect db
connectDB();

//midleware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.send("API is Running"));

// Use Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("Server started on PORT", PORT));
