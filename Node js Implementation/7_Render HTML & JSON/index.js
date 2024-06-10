const express = require("express");
const app = express();

const PORT = 8000;

app.get("", (req, res) => {
  res.send(`
  <h1>Welcome to Home page</h1>
  <a href="/about">Go to About page</a>
  `);
});

app.get("/about", (req, res) => {
  res.send(`
  <input type="text" placeholder="user name" value="${req.query.name}"  />
  <button>Click</button>
  <a href="/">Go to Home page</a>
  `);
});

app.get("/help", (req, res) => {
  res.send([
    {
      name: "Peter",
      email: "peter@test.com",
    },
    {
      name: "Bruce",
      email: "bruce@test.com",
    },
  ]);
});

app.listen(PORT, () => console.log(`Server Started at ${PORT}`));
