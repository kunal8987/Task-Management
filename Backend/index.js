const express = require("express");
const dotenv = require("dotenv");
const { connection } = require("./Utility/DataBase");

//* DOTENV CONFIGURATION 
dotenv.config()

//* CREATE  APP THROUGH EXPRESS 
const app = express();

//* MIDDLEWARE FOR ACCEPT JSON DATA FROM REQUEST BODY 
app.use(express.json());

//* PORT NO FOR LISTING THE SERVER 
let PORT = process.env.PORT_NO || 4200;

//* SERVER CODE 
app.listen(PORT, async (req, res) => {
  try {
    await connection();
    console.log("Server Listening On Port", PORT);
  } catch (error) {
    console.log(error.massage);
  }
});
