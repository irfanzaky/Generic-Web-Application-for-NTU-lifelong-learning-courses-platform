import express from "express";
import User from "../models/userModel";
import { getToken, isAuth } from "../util";

const router = express.Router();

router.post("/signin", async (req, res) => {
  const signinUser = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (signinUser) {
    res.send({
      username: signinUser.username,
      email: signinUser.email,
      role: signinUser.role,
      token: getToken(signinUser.toJSON()),
    });
  } else {
    res.status(401).send({ msg: "Invalid email or Password!" });
  }
});

router.post("/register", async (req, res) => {
  const user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: "student",
  });
  const newUser = await user.save();
  if (newUser) {
    res.send({
      username: newUser.username,
      email: newUser.email,
      role: newUser.role,
      token: getToken(newUser.toJSON()),
    });
  } else {
    res.status(401).send({ msg: "Failed to register new user" });
  }
});

router.get("/createAdmin", async (req, res) => {
  try {
    const user = new User({
      username: "irfan Zaky Harlen",
      email: "irfanzak002@e.ntu.edu.sg",
      password: "1234",
      role: "Admin",
    });
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    res.send({ message: error.message });
  }
});

export default router;
