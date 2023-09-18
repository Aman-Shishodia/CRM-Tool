const express = require("express");
const app = express();
const cors = require("cors");

require("./DB");
const PORT = 6001;

const userrouter = require("./Router/Userrouter");
const Projectrouter = require("./Router/Projectrouter");
const Contactrouter = require("./Router/Contactrouter");
const Accountrouter = require("./Router/Accountrouter");

app.use(cors());
app.use(express.json());
app.use(userrouter);
app.use(Projectrouter);
app.use(Contactrouter);
app.use(Accountrouter);

app.get((req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server runs at port ${PORT}`);
});
