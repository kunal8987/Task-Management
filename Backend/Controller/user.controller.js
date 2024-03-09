const UserModel = require("../Model/user.model");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { passwordHashed, passwordCompair } = require("../Utility/core");

dotenv.config();

//* FUNCTION TO REGISTERED THE NEW USER TO DATABASE
const registerUser = async (req, res) => {
  try {
    //* GETTING DATA FROM REQUEST BODY
    let { username, email, password } = req.body;

    //* VALIDATING THE USER DATA
    if (!username || !email || !password) {
      return res
        .status(404)
        .send({ success: false, message: "Please Enter Your Details" });
    }

    //* FINDING THE EXISTING USER
    let oldUser = await UserModel.findOne({ email });
    if (oldUser) {
      return res
        .status(200)
        .send({ success: true, message: "User Already Registered" });
    }

    //* HASHING THE PASSWORD
    let hashedPassword = await passwordHashed(password);

    //* CREATING THE NEW USER
    let newUser = await UserModel.create({
      email,
      password: hashedPassword,
      username,
    });

    //* SAVING THE NEW USER TO DATABASE
    newUser.save();
    // newUser.password = undefined;
    return res
      .status(200)
      .send({ success: true, message: "New User Has Been Created" });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Register User Controller ",
      error: error.message,
    });
  }
};

//* FUNCTION TO LOGIN THE USER
const loginUser = async (req, res) => {
  try {
    //* GETTING DATA FROM REQUEST BODY
    let { email, password } = req.body;

    //* VALIDATE THE EMAIL AND PASSWORD
    if (!email || !password) {
      return res
        .status(404)
        .send({ success: false, message: "Please Enter Your Details" });
    }

    //* FINDING THE USER IN DATABASE THROUGH EMAIL
    let oldUser = await UserModel.findOne({ email });

    //* IF EMAIL IS NOT AVAILABLE
    if (!oldUser) {
      return res
        .status(404)
        .send({ success: false, message: "User Not Registered Wrong Email!" });
    }

    //* IF AVAILABLE THEN MATCH THE HASH PASSWORD
    let matchUser = await passwordCompair(password, oldUser.password);

    //*IF PASSWORD NOT MATCH
    if (!matchUser) {
      return res
        .status(404)
        .send({ success: false, message: "Wrong Password" });
    }

    //* GENERATING THE TOKEN AND SENDING RESPONSE
    let token = jwt.sign(
      { userId: oldUser._id, username: oldUser.username },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "2d",
      }
    );

    oldUser.password = undefined;
    return res.status(200).send({
      success: true,
      massage: "User Login Successfully",
      token: token,
      oldUser,
    });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Login User Controller ",
      error: error.message,
    });
  }
};

//* FUNCTION TO GET ALL USER
const getUser = async (req, res) => {
  try {
    //* GETTING ALL USER IN DATABASE
    let user = await UserModel.find();

    //* LOOP THE USER ARRAY TO HIDE THE PASSWORD
    user.forEach((user) => {
      user.password = undefined;
    });

    //*RESPONSE SENDING
    return res
      .status(200)
      .send({ success: true, count: user.length, massage: "All Users", user });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Login User Controller ",
      error: error.message,
    });
  }
};

module.exports = { registerUser, loginUser, getUser };
