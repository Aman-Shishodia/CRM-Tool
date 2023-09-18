const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/CRM")
  .then(() => {
    console.log("DB connect");
  })
  .catch((e) => {
    console.log(e);
  });
