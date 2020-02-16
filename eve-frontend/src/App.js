import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/HomePage/HomePage";
import NavbarHome from "./Components/Navbar/NavbarHome.js";
import Footer from "./Components/Footer/Footer.js";
import NavbarLogin from "./Components/Navbar/NavbarLogin.js";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/signup";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";
import EventSearch from "./Components/EventSearch/eventSearch";
import EventCreation from "./Components/EventCreation/eventCreation";
import CreateCommunity from "./Components/CreateCommunity/createCommunity";
import userProfile from "./Components/UserProfile/userProfile";
import "./App.css";

// Redux
import { Provider } from "react-redux";
import store from "./store";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <section>
            <Switch>
              <Route exact path="/navbarhome" component={NavbarHome} />
              <Route exact path="/Footer" component={Footer} />
              <Route exact path="/NavbarLogin" component={NavbarLogin} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/searchevent" component={EventSearch} />
              <Route exact path="/createevent" component={EventCreation} />
              <Route exact path="/createcommunity" component={CreateCommunity} />
              <Route exact path="/userprofile" component={userProfile} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
