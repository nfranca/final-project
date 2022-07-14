import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import FindCouple from "./FindCouple";
import Header from "./Header";
import SignIn from "./SignIn";
import MyAccount from "./MyAccount";
import Footer from "./Footer";
import Confirmation from "./components/Confirmation";
import CoupleDetails from "./CoupleDetails";
// import Auth0ProviderWithHistory from "./Auth0Provider";

const App = (props) => {
  return (
    // <Auth0ProviderWithHistory>
    <Router>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/myaccount">
          <MyAccount />
        </Route>
        <Route exact path="/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/findcouple">
          <FindCouple />
        </Route>
        <Route exact path="/coupledetails/:coupleId">
          <CoupleDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
    // </Auth0ProviderWithHistory>
  );
};

export default App;
