const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

//set ejs engine
app.set("view engine", "ejs");

//routing
app.get("", (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`);
});

app.get("/profile", (req, resp) => {
  const user = {
    name: "Yash Jain",
    email: "yash@test.com",
    country: "India",
    skills: ["php", "js", "node js", "java", "c++"],
  };
  resp.render("profile", { user });
});

app.get("/login", (req, resp) => {
  resp.render("login");
});

app.get("/about", (req, resp) => {
  resp.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (req, resp) => {
  resp.sendFile(`${publicPath}/help.html`);
});

app.get("*", (_, resp) => {
  resp.sendFile(`${publicPath}/nopage.html`);
});

app.listen(5000);
