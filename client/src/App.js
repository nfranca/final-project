import { BrowserRouter as Router, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import Header from "./Header";


const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Route exact path="/">
          <Header />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Router>
    </>
  );
}

export default App;

// while not signed in
// [ / ]: describes what the site does (wedding registry - for cash?)
// [ /search ]: search for email address of a couple
// [ /couple/:email ] the information and registry the couple has selected 
// [ /signIn ]: use Auth0 to log in.  Redirect them to account creation if it is their first time

// while signed in
// [ /account-creation ] let a first time user select if they want to upload a registry or make a purchase
// when they make their choice either redirect them to /search or /manage-registry
// [/manage-registry] show the current registry of the logged in user and allow them to add items from a list of items

