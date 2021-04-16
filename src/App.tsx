import React from "react";
import HomePage from "./pages/home_page/HomePage";
import LandingPage from "./pages/landing_page/LandingPage";
import SignupPage from "./pages/signup_page/SignupPage";
import LoginPage from "./pages/login_page/LoginPage";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/register">
            <SignupPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/landing">
            <LandingPage />
          </Route>
          <Route
            exact
            path="/"
            render={() => {
              return false ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/landing" />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
