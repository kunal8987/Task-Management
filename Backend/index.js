const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./Utility/DataBase");

dotenv.config()

const app = express();

app.use(express.json());

let PORT = process.env.PORT_NO || 4200;

app.listen(PORT, async (req, res) => {
  try {
    await connection();
    console.log("server listening on port", PORT);
  } catch (error) {
    console.log(error.massage);
  }
});
