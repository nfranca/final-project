import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import GlobalStyles from "./GlobalStyles";
import Home from "./Home";
import FindCouple from "./FindCouple";
import Header from "./Header";
import SignIn from "./SignIn";
import MyAccount from "./MyAccount";
import Footer from "./Footer";
import CoupleDetails from "./CoupleDetails";
import Gifts from "./components/Gifts";
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
        <Route path="/myaccount">
          <MyAccount />
        </Route>

        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/findcouple">
          <FindCouple />
        </Route>
        <Route exact path="/coupledetails/:coupleId/gifts">
          <Gifts />
        </Route>
        <Route path="/coupledetails/:coupleId">
          <CoupleDetails />
        </Route>
      </Switch>
      <Footer />
    </Router>
    // </Auth0ProviderWithHistory>
  );
};

export default App;
