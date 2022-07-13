const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//const fightInfo = require("./backend/data.js");
const {party} = require("./coupleInfo.js");

const dbFunction = async () => {
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();

  const db = client.db();
  console.log("connected!");

  // await db.collection("flights").insertOne({ flights });
  await db.collection("party").insertMany(party);
  // await db.collection("reservations").insertMany(reservations);

  client.close();
  console.log("disconnected!");
};

dbFunction(`Cluster0`);
