const express = require("express");
const reqFilter = require("./middleware/middlew");

const app = express();
const route = express.Router();

//if we want to use middleware on single routing
// app.use(reqFilter);
// app.get("/about",reqFilter, (res, resp) => {
//   resp.send("Welcome to About page");
// });

route.use(reqFilter);

app.get("/", (res, resp) => {
  resp.send("Welcome to Home page");
});

app.get("/users", (res, resp) => {
  resp.send("Welcome to Users page");
});

//grouping of middleware [In both about and contact page middleware will work]
route.get("/about", (res, resp) => {
  resp.send("Welcome to About page");
});
route.get("/contact", (res, resp) => {
  resp.send("Welcome to contact page");
});

app.use("/", route);

app.listen(5000);
