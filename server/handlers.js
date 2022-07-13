"use strict";

const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//const { couple, cerimony, party } = require("./coupleInfo");

const addCouple = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  try {
    const db = client.db();
    console.log("connected!");

    await db.collection("couple").insertOne(req.body);

    return res.status(200).json({ status: 200, message: "couple added" });
  } catch (err) {
    return res.status(404).json({
      status: 404,
      message: "couple does not exist",
    });
  }
};

const deleteCouple = async (req, res) => {};

const updateCouple = async (req, res) => {};

const getAllCouple = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db();
  console.log("connected!");

  const couple = await db.collection("couple").find().toArray();

  if (couple) {
    return res.status(200).json({ couple: couple });
  }
  return res.status(404).json({
    status: 404,
    message: "couple does not exist",
  });
};

const getCouple = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db();
  const coupleEmail = req.params.email;
  const result = await db
    .collection("couple")
    .findOne({ coupleEmail: coupleEmail });

  result
    ? res.status(200).json({ status: 200, coupleEmail, data: result })
    : res
        .status(404)
        .json({ status: 404, coupleEmail, data: "couple not found" });

  client.close();
};

const getCerimony = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db();
  const coupleEmail = req.params.email;
  const result = await db
    .collection("cerimony")
    .findOne({ coupleEmail: coupleEmail });

  result
    ? res.status(200).json({ status: 200, coupleEmail, data: result })
    : res
        .status(404)
        .json({ status: 404, coupleEmail, data: "cerimony not found" });

  client.close();
};

const getParty = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db();
  const coupleEmail = req.params.email;
  const result = await db
    .collection("party")
    .findOne({ coupleEmail: coupleEmail });

  result
    ? res.status(200).json({ status: 200, coupleEmail, data: result })
    : res
        .status(404)
        .json({ status: 404, coupleEmail, data: "party not found" });

  client.close();
};

const getCoupleByName = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  await client.connect();

  const db = client.db();
  const bName = req.params.bname;
  const gName = req.params.gname;
  const result = await db
    .collection("couple")
    .findOne({ brideFirstName: bName, groomFirstName: gName });
  console.log(gName);
  console.log(result);

  result
    ? res.status(200).json({ status: 200, data: result })
    : res.status(404).json({ status: 404, data: "couple not found" });

  client.close();
};

module.exports = {
  addCouple,
  deleteCouple,
  updateCouple,
  getAllCouple,
  getCouple,
  getCerimony,
  getParty,
  getCoupleByName,
};

//Insomnia (to add a new reservation)
//DELETE
//JSON
// {
//     "id": "00a33c23-3332-4ef2-bd71-be7a6430485f",
//     "flight": "SA231",
//     "seat": "10F",
//     "givenName": "Elon",
//     "surname": "Mask",
//     "email": "elon@backfuture.com"
// }

//Insomnia (to update a reservation)
//PATCH
//localhost:8000/api/update-reservation/elon@backfuture.com
//JSON
// {
//     "id": "00a33c23-3332-4ef2-bd71-be7a6430485f",
//     "flight": "SA231",
//     "seat": "25B",
//     "givenName": "Elon",
//     "surname": "Mask",
//     "email": "elon@backfuture.com"
// }
