const mongoose = require("mongoose");

//* Define User Schema
const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

//* Create User model
const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
