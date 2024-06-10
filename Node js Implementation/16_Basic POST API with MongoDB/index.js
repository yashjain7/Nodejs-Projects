const dbConnect = require("./mongodb");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    let data = await dbConnect();
    let users = await data.find().toArray();
    res.send(users);
  } catch (error) {
    res
      .status(500)
      .send({
        error: "An error occurred while fetching data",
        details: error.message,
      });
  }
});

app.post("/", async (req, res) => {
  try {
    let data = await dbConnect();
    let result = await data.insertOne(req.body);
    res.send(result);
  } catch (error) {
    res
      .status(500)
      .send({
        error: "An error occurred while inserting data",
        details: error.message,
      });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
