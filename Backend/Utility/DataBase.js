const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config()

let connection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL);
    console.log(`Server Is Connected To Database ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Error Form Db File ${error.message}`);
  }
};

module.exports = { connection };
