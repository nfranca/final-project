// const { MongoClient } = require("mongodb");

// require("dotenv").config();
// const { MONGO_URI } = process.env;

// console.log(MONGO_URI);

// const options = {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// //if I add dbName I'll add the name under "Cluster0"
// //if I delete bdName the name goes under COncordia (root)
// const dbFunction = async () => {
//   // "dbName" delete to ex. 1.3
//   // creates a new client
//   const client = new MongoClient(MONGO_URI, options);

//   // connect to the client
//   await client.connect();

//   // connect to the database (db name is provided as an argument to the function)
//   const db = client.db(); // "dbName" delete to ex. 1.3
//   console.log("connected!");

//   await db.collection("flights").insertOne({ flight_id: "SA231", seat_id: "1A", isAvailable: true });

//   // close the connection to the database server
//   client.close();
//   console.log("disconnected!");
// };

// dbFunction(`Cluster0`);
// // dbFunction(`Concordia`);
