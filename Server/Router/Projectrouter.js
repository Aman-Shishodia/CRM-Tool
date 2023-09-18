const express = require("express");

const router = express.Router();

const Project = require("../Schema/Projectschema");

router.post("/addproject", async (req, res) => {
  try {
    const {
      projecttitle,
      projectid,
      projectclient,
      startdate,
      deaddate,
      account,
      projectprice,
    } = req.body;
    const data = await Project({
      projecttitle,
      projectid,
      projectclient,
      startdate,
      deaddate,
      account,
      projectprice,
    }).save();
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/projectsdata", async (req, res) => {
  try {
    const data = await Project.find();
    const length = await Project.countDocuments();
    res.status(200).send({ data: data, length });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/deleteproject/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const data = await Project.findByIdAndDelete({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/search/:key", async (req, res) => {
  try {
    const data = await Project.find({
      $or: [
        { projecttitle: { $regex: req.params.key } },
        { projectclient: { $regex: req.params.key } },
      ],
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/projectdetails/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id);
    // const prid = JSON.parse(id);
    const data = await Project.find({ projectid: id });
    // console.log(data);
    // console.log("data");
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/geteditproject/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Project.findById({ _id: id });
    res.status(200).send(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/editproject/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const {
      projecttitle,
      projectid,
      projectclient,
      startdate,
      deaddate,
      account,
      projectprice,
    } = req.body;
    const predata = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).send(predata);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
