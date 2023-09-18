const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  projecttitle: {
    type: String,
    required: true,
  },
  projectid: {
    type: String,
    required: true,
    unique: true,
  },
  projectclient: {
    type: String,
    required: true,
  },
  startdate: {
    type: Date,
    required: true,
  },
  deaddate: {
    type: Date,
    required: true,
  },
  projectprice: {
    type: Number,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
});

const Project = new mongoose.model("Project", projectSchema);

module.exports = Project;
