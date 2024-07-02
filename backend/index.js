const express = require("express");
const app = express();
const port = 3000;
const connectdb = require("./config/connectdb.js");
app.use(express.json());

connectdb();
app.get("/", (req, res) => {
  res.send("Hello World!");
});
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
