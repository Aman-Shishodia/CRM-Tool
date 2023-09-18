const express = require("express");

const router = express.Router();

const Account = require("../Schema/Accountschema");
const Contact = require("../Schema/Contactschema");

router.post("/addaccount", async (req, res) => {
  // console.log(req.body);
  try {
    const { account, email, usergroup, contact, website, country } = req.body;
    const data = await Account({
      account,
      email,
      usergroup,
      contact,
      website,
      country,
    }).save();
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
});

router.get("/allaccounts", async (req, res) => {
  try {
    const data = await Account.find({});
    const length = await Account.countDocuments();
    res.status(200).json({ data: data, length });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/deleteaccount/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    // console.log("Jek");
    const data = await Account.findByIdAndDelete({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/getaccount/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Account.find({ account: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/accountcontacts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Contact.find({ account: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
