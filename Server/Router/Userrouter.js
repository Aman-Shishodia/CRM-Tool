const express = require("express");

const router = express.Router();

const User = require("../Schema/Userschema");

router.post("/register", async (req, res) => {
  // res.send(req.body);
  // console.log(req.body);
  try {
    const { firstname, lastname, contactno, email, password } = req.body;
    const data = await User({
      firstname,
      lastname,
      contactno,
      email,
      password,
    })
      // console.log(req.body);
      .save();

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (password == user.password) {
      res.status(200).send(user);
    } else {
      res.status(400).send("Wrong Password");
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/userdata", async (req, res) => {
  try {
    const data = await User.find();
    const length = await User.countDocuments();
    res.status(200).send({ data: data, length });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
