const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const databaseName = "youtube-app-1";
const client = new MongoClient(url);

async function getData() {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log("Connected to the MongoDB server");

    // Select the database and collection
    const db = client.db(databaseName);
    const collection = db.collection("users");

    // Query the collection and convert the results to an array
    const data = await collection.find({}).toArray();

    // Log the retrieved data
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    // Ensure the client will close when you finish/error
    await client.close();
    console.log("Closed MongoDB connection");
  }
}

// Call the getData function
getData();
