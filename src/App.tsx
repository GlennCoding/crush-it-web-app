import React, { useEffect } from "react";
import HomePage from "./pages/home_page/HomePage";
import LandingPage from "./pages/landing_page/LandingPage";
import SignupPage from "./pages/signup_page/SignupPage";
import LoginPage from "./pages/login_page/LoginPage";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { useToken } from "./hooks/useToken";
export default function App() {
  const { token, setToken } = useToken();

  console.log(token);
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/home"
            render={() => {
              return token != null ? <HomePage /> : <Redirect to="/login" />;
            }}
          />
          <Route
            exact
            path="/register"
            render={() => {
              return token != null ? (
                <Redirect to="/home" />
              ) : (
                <SignupPage setToken={setToken} />
              );
            }}
          />
          <Route
            exact
            path="/login"
            render={() => {
              return token != null ? (
                <Redirect to="/home" />
              ) : (
                <LoginPage setToken={setToken} />
              );
            }}
          />
          <Route
            exact
            path="/landing"
            render={() => {
              return token != null ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/landing" />
              );
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return token != null ? (
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
