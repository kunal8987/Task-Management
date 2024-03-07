const TaskModel = require("../Model/task.model");

//* FUNCTION TO CREATE NEW TASK
const createTask = async (req, res) => {
  try {
    //* GETTING DATA FROM REQUEST BODY
    let { title, description, dueDate, priority, userId, completed } = req.body;

    //* VALIDATE THE DATA
    if (!title || !description || !dueDate) {
      return res
        .status(404)
        .send({ success: false, message: "Please Enter All Details" });
    }

    //* CREATE A NEW TASK IN DATABASE
    let newTask = await TaskModel.create({
      title,
      description,
      dueDate,
      priority,
      userId,
      completed,
    });

    //* SAVING A NEW TASK
    newTask.save();

    //* RESPONSE TO CREATE A NEW TASK
    return res
      .status(200)
      .send({ success: true, message: "New Task Has Been Created", newTask });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Create Task Controller ",
      error: error.message,
    });
  }
};

const getAllTasks = async (req, res) => {
  try {
    //* FINDING THE TASK IN DATABASE
    let tasks = await TaskModel.find();

    //* VALIDATE THE TASK LIST
    if (tasks.length > 0) {
      return res
        .status(200)
        .send({ success: true, message: "Task List Found ", tasks });
    } else {
      return res
        .status(404)
        .send({ success: false, message: "Task List Empty ", tasks });
    }
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Get All Task Controller ",
      error: error.message,
    });
  }
};

const updateTaskList = async (req, res) => {
  try {
    //* GET TASKS ID
    let taskId = req.params.id;

    //* VALIDATE TASK ID
    if (!taskId) {
      return res.status(404).send({
        success: false,
        massage: "Task ID Is Required",
      });
    }

    //* FINDING THE OLD TASK
    let oldTask = await TaskModel.findById(taskId);

    //* VALIDATE THE OLD TASK
    if (!oldTask) {
      return res.status(404).send({
        success: false,
        massage: "Task Not Found",
      });
    }

    //* GETTING DATA FROM REQUEST BODY
    let { title, description, dueDate, priority, userId, completed } = req.body;

    //* UPDATE THE TASK IN DATABASE
    let updateTask = await TaskModel.findByIdAndUpdate(
      taskId,
      { title, description, dueDate, priority, userId, completed },
      { new: true }
    );

    //* RESPONSE TO UPDATE THE TASK
    return res
      .status(200)
      .send({ success: true, message: "Task List Updated ", updateTask });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Update Task List Controller ",
      error: error.message,
    });
  }
};

const deleteTaskList = async (req, res) => {
  try {
    //* GET TASKS ID
    let taskId = req.params.id;

    //* VALIDATE TASK ID
    if (!taskId) {
      return res.status(404).send({
        success: false,
        massage: "Task ID Is Required",
      });
    }

    //* FINDING THE OLD TASK
    let oldTask = await TaskModel.findById(taskId);

    //* VALIDATE THE OLD TASK
    if (!oldTask) {
      return res.status(404).send({
        success: false,
        massage: "Task Not Found",
      });
    }

    //* DELETING THE TASK FROM DATABASE
    await TaskModel.findByIdAndDelete(taskId);

    //* RESPONSE TO DELETE THE TASK
    return res.status(200).send({
      success: true,
      massage: "Task Deleted Successfully",
    });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Delete Task List Controller ",
      error: error.message,
    });
  }
};

module.exports = { createTask, getAllTasks, updateTaskList, deleteTaskList };
