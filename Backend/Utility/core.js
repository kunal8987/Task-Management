const bcrypt = require("bcrypt");

const passwordHashed = async (password) => {
  try {
    const manipulate = await bcrypt.hash(password, 5);
    return manipulate;
  } catch (error) {
    console.log(`Hashed Password ${error.massage}`);
  }
};

const passwordCompair = async (passwords, manipulate) => {
  return bcrypt.compare(passwords, manipulate);
};

module.exports = { passwordCompair, passwordHashed };
