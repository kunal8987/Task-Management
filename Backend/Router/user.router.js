const express = require("express");
const { registerUser } = require("../Controller/user.controller");

let userRouter = express.Router();

userRouter.post("/register", registerUser);

module.exports = { userRouter };
