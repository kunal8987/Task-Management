const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../Controller/user.controller");

//* CREATE USER ROUTER FROM EXPRESS ROUTER
let userRouter = express.Router();

//* POST REGISTER REQUEST
userRouter.post("/register", registerUser);

//*  POST LOGIN REQUEST
userRouter.post("/login", loginUser);

//* GET ALL USER REQUEST
userRouter.get("/getAll", getUser);

module.exports = { userRouter };
