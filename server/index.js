const express = require("express");
const morgan = require("morgan");

// const...
const { addCouple, deleteCouple, updateCouple, getAllCouple, getCouple, getCerimony, getParty, getCoupleByName } = require("./handlers");

express()
  .use(morgan("tiny"))
  .use(express.json())
  .use(express.static("public"))
  //const app = express(); 

  //endpoints...
  .post("/accountcreation", addCouple) //5 
  .delete("/delete-account", deleteCouple)
  .patch('/manage-registry', updateCouple) //6
  .get("/search", getAllCouple) //2
  .get("/get-couple/:id", getCouple) //3
  .get("/search/couple/:bname&:gname", getCoupleByName)

  //how can I get the spefic information if it will bring all the info in a bloc?
  .get("/cerimony/:email", getCerimony) // Can I link this info in the couple page?
  .get("/party/:email", getParty) // Can I link this info in the couple pag
  


  // while not signed in
  // 1 [ / ]: describes what the site does (wedding registry - for cash?)
  // 2 [ /search ]: search for email address of a couple
  // 3 [ /couple/:email ] the information and registry the couple has selected
  // 4 [ /signIn ]: use Auth0 to log in.  Redirect them to account creation if it is their first time

  // while signed in
  // 5 [ /account-creation ] let a first time user select if they want to upload a registry or make a purchase
  // when they make their choice either redirect them to /search or /manage-registry
  // 6 [/manage-registry] show the current registry of the logged in user and allow them to add items from a list of items

//   .get("*", (req, res) => {
//     res.send("Hello World");
//   })

  //.listen(9000); //8000 before change back later

  .get("*", (req, res) => {
    res.status(404).json({
    status: 404,
    message: "This is obviously not what you are looking for.",
    });
})

// Node spins up our server and sets it to listen on port 8000.
.listen(8000, () => console.log(`Listening on port 8000`));
