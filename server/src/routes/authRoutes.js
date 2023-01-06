import { Router } from "express";
import User from "../models/user";
import bcrypt from "bcryptjs";

const authRoutes = Router();

authRoutes.post("/signup", async (req, res) => {
  try {
    const { username, password, confirmPassword } = req.body;

    const userInDb = await User.findOne({ username });

    if (userInDb) {
      return res.status(422).json({
        error: "Validation error",
        data: { username: "Username already registered" },
      });
    }

    const user = await User.create({ username, password, confirmPassword });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});
authRoutes.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(422).json({
        error: "Validation error",
        data: { username: "Username and password are required fields." },
      });
    }

    const userInDb = await User.findOne({ username });

    if (!userInDb) {
      return res.status(422).json({
        error: "Validation error",
        data: {
          username: "Invalid username and/or password.",
        },
      });
    }

    const doPasswordsMatch = bcrypt.compareSync(
      password,
      userInDb.passwordHash
    );

    if (!doPasswordsMatch) {
      return res.status(422).json({
        error: "Validation error",
        data: { username: "Invalid username and/or password." },
      });
    }

    res.json(userInDb);
  } catch (error) {
    res.status(500).json(error);
  }
});
