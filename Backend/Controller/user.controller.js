const UserModel = require("../Model/user.model");
const { passwordHashed } = require("../Utility/core");



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
    oldUser.password = undefined;
    if (oldUser) {
      return res
        .status(200)
        .send({ success: true, message: "User Already Registered", oldUser });
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
    newUser.password = undefined;
    return res
      .status(200)
      .send({ success: true, message: "New User Has Been Created", newUser });
  } catch (error) {
    //! HANDLING THE ERROR
    return res.status(500).send({
      success: false,
      massage: "Error From Register User Controller ",
      error: error.message,
    });
  }
};

module.exports = { registerUser };
