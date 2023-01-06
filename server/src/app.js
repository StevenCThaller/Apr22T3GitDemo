import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { DB_URL } from "./configs/db";
import { PORT } from "./configs/api";
import apiRoutes from "./routes";

mongoose
  .connect(DB_URL)
  .then((_) => console.log("Do the thing!"))
  .catch((err) => console.log("[Database] Connection failed."));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(PORT, () => console.log("[Server] Listening on port", PORT));
