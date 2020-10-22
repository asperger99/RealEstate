import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import SignupPage from "./components/pages/SignupPage";
import LoginPage from "./components/pages/LoginPage.js";
import HomePage from "./components/pages/HomePage";
import "./App.css";
import PropertiesPage from "./components/pages/PropertiesPage";
import CityPropertiesPage from "./components/pages/CityPropertiesPage";
import Wishlist from "./components/pages/Wishlist";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/sign-up" exact component={SignupPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/properties" exact component={PropertiesPage} />
          <Route
            path="/properties/:cityname"
            children={<CityPropertiesPage />}
          />
          <Route path="/wishlist" exact component={Wishlist} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
