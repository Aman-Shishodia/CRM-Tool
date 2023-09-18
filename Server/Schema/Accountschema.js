const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  account: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  usergroup: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    min: 10,
    required: true,
  },
  website: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
});

const Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
