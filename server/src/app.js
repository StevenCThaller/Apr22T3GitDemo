import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import apiRoutes from "./routes";

mongoose
  .connect("mongodb://localhost/somedatabasename")
  .then((_) => console.log("Do the thing!"));

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(8080, () => console.log("Server listening on 8080"));
