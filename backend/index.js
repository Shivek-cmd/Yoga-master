const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(express.json());
const connectdb = require("./config/connectdb.js");

connectdb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const userRoutes = require("./routes/userRoutes");
const classRoutes = require("./routes/classRoutes.js");
app.use("/api/users", userRoutes);
app.use("/", classRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
