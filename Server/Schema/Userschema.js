const mongoose = require("mongoose");

const Userschema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
  contactno: {
    type: Number,
    required: true,
    min: [10, "Number should contain 10 digits"],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", Userschema);

module.exports = User;
