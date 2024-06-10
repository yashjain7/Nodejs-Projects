const express = require("express");
const app = express();

const PORT = 8000;

app.get("", (req, res) => {
  console.log("Data Sent By Browser in url =>>>", req.query.name); // use http://localhost:8000/?name=Yash Jain
  res.send("Welcome, " + req.query.name);
});

app.get("/about", (req, res) => {
  res.send("Welcome, This is a About Page");
});

app.get("/help", (req, res) => {
  res.send("Welcome, This is a Help Page");
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
