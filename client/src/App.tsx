import React from "react";
import HomePage from "./pages/home_page/HomePage";
import LandingPage from "./pages/landing_page/LandingPage";
import SignupPage from "./pages/signup_page/SignupPage";
import LoginPage from "./pages/login_page/LoginPage";
import WorkoutEditPage from "./pages/workout_edit_page/WorkoutEditPage";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { useToken } from "./hooks/useToken";
export default function App() {
  const { token, setToken } = useToken();

  console.log(token);
  return (
    <main>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/edit"
            render={() => {
              return token ? (
                <WorkoutEditPage />
              ) : (
                <Redirect to="/landing-page" />
              );
            }}
          />
          <Route
            exact
            path="/home"
            // render={() => {
            //   return token ? (
            //     <HomePage setToken={setToken} />
            //   ) : (
            //     <Redirect to="/landing-page" />
            //   );
            // }}
          >
            <HomePage setToken={setToken} />
          </Route>
          <Route
            exact
            path="/register"
            render={() => {
              return token ? (
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
              return token ? (
                <Redirect to="/home" />
              ) : (
                <LoginPage setToken={setToken} />
              );
            }}
          />
          <Route
            exact
            path="/landing-page"
            render={() => {
              return token ? <Redirect to="/home" /> : <LandingPage />;
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              return token ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/landing-page" />
              );
            }}
          />
        </Switch>
      </BrowserRouter>
      {/* <WorkoutEditPage name="Workout 1" description="Amazing Workout" /> */}
    </main>
  );
}
