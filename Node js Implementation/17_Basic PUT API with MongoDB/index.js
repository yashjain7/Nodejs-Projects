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
    res.status(500).send({
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
    res.status(500).send({
      error: "An error occurred while inserting data",
      details: error.message,
    });
  }
});

app.put("/:firstName", async (req, res) => {
  try {
    const data = await dbConnect();
    let result = await data.updateOne(
      { firstName: req.params.firstName },
      { $set: req.body }
    );

    if (result.modifiedCount === 0) {
      res.status(404).send({ status: "No document found to update" });
    } else {
      res.send({ status: "Updated successfully" });
    }
  } catch (error) {
    res.status(500).send({
      error: "An error occurred while updating data",
      details: error.message,
    });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
