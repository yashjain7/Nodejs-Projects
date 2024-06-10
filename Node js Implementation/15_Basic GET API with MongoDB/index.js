const dbConnect = require("./mongodb");
const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  let data = await dbConnect();
  data = await data.find().toArray();
  res.send(data);
  //console.log(data);
});

app.listen(8000);
