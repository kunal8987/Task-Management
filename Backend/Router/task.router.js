const express = require("express");
const { createTask } = require("../Controller/task.controller");

taskRouter = express.Router();

taskRouter.post("/create/new", createTask);

module.exports = { taskRouter };
