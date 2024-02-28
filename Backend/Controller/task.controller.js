const TaskModel = require("../Model/task.model");

//* FUNCTION TO CREATE NEW TASK
const createTask = async (req, res) => {
  try {
    //* GETTING DATA FROM REQUEST BODY
    let { title, description, dueDate } = req.body;

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

module.exports = { createTask };
