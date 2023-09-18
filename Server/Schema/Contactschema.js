const mongoose = require("mongoose");

const Contactschema = new mongoose.Schema({
  account: {
    type: String,
    required: true,
  },
  firstname: {
    required: true,
    type: String,
  },
  lastname: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    min: [10, "Number should contain 10 digits"],
    trim: true,
  },
  email: {
    type: String,
    unique: false,
    required: true,
  },
});

const Contact = new mongoose.model("Contact", Contactschema);

module.exports = Contact;
