const express = require("express");
const { registerUser, loginUser } = require("../Controller/user.controller");

let userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);

module.exports = { userRouter };
