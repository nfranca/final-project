const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

console.log(MONGO_URI);

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const dbFunction = async () => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db();
  console.log("connected!");

  await db.collection("test").insertOne({ name: "Yalla Vamos" });

  client.close();
  console.log("disconnected!");
};

dbFunction(`Cluster0`);
