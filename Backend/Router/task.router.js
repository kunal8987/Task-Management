const express = require("express");
const {
  createTask,
  getAllTasks,
  updateTaskList,
  deleteTaskList,
} = require("../Controller/task.controller");
const { protector } = require("../Middleware/Auth.middleware");

taskRouter = express.Router();

taskRouter.post("/create/new", protector, createTask);
taskRouter.get("/get/task", protector, getAllTasks);
taskRouter.put("/update/task/:id", protector, updateTaskList);
taskRouter.put("/delete/task/:id", protector, deleteTaskList);

module.exports = { taskRouter };
