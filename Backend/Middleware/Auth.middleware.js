const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const protector = async (req, res, next) => {
  try {
    //*DECODE AND VERIFY THE TOKEN
    const decode = jwt.verify(
      req.headers.authorization,
      process.env.JWT_SECRET_KEY
    );
    req.body.userId = decode.userId;
    req.body.username = decode.username;
    //*FURTHER PROCESS THROUGH NEXT
    next();
  } catch (error) {
    res.status(500).send({
      success: false,
      massage: "Error From Auth Middleware",
      error: error.massage,
    });
  }
};

module.exports = { protector };
