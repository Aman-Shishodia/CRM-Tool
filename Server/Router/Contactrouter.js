const express = require("express");

const router = express.Router();

const Contact = require("../Schema/Contactschema");

router.post("/addcontact", async (req, res) => {
  try {
    const { firstname, lastname, phone, email, account } = req.body;

    const data = await Contact({
      firstname,
      lastname,
      phone,
      email,
      account,
    }).save();

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/projectcontact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // const prid = JSON.parse(id);
    const data = await Contact.find({ projectid: id });

    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/deletecontact/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Contact.findByIdAndDelete({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/allcontact", async (req, res) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;
    const skip = (page - 1) * limit;
    const length = await Contact.countDocuments();
    const data = await Contact.find().skip(skip).limit(limit);
    res.status(200).send({ data: data, length });
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
