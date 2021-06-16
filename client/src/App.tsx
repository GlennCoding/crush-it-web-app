import React from 'react'
import HomePage from './pages/home_page/HomePage'
import LandingPage from './pages/landing_page/LandingPage'
import SignupPage from './pages/signup_page/SignupPage'
import LoginPage from './pages/login_page/LoginPage'
import WorkoutEditPage from './pages/workout_edit_page/WorkoutEditPage'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { useToken } from './hooks/useToken'
import { TokenContext } from './context/token_context'
import { Workout } from './interfaces/workout'

export default function App() {
    const { token, setToken } = useToken()

    return (
        <TokenContext.Provider
            value={{
                set: setToken,
                value: token,
            }}
        >
            <main>
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path="/edit-workout"
                            render={(routeProps) => {
                                const { workout } = routeProps.location.state as {
                                    workout: Workout
                                }
                                return token ? (
                                    <WorkoutEditPage workoutProps={workout} />
                                ) : (
                                    <Redirect to="/landing-page" />
                                )
                            }}
                        />
                        <Route
                            exact
                            path="/home"
                            render={() => {
                                return token ? <HomePage /> : <Redirect to="/landing-page" />
                            }}
                        />
                        <Route
                            exact
                            path="/register"
                            render={() => {
                                return token ? <Redirect to="/home" /> : <SignupPage setToken={setToken} />
                            }}
                        />
                        <Route
                            exact
                            path="/login"
                            render={() => {
                                return token ? <Redirect to="/home" /> : <LoginPage />
                            }}
                        />
                        <Route
                            exact
                            path="/landing-page"
                            render={() => {
                                return token ? <Redirect to="/home" /> : <LandingPage />
                            }}
                        />
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return token ? <Redirect to="/home" /> : <Redirect to="/landing-page" />
                            }}
                        />
                    </Switch>
                </BrowserRouter>
            </main>
        </TokenContext.Provider>
    )
}
