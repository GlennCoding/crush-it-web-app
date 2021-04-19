import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";
import * as authServices from "../../services/auth_services";

export default function LoginPage(props: {
  setToken: (token: string) => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onFormSubmitted = async (event: any) => {
    event.preventDefault();

    try {
      const response = await authServices.login({ email, password });
      if (response.success) {
        props.setToken(response.token);
      } else {
        setErrorMessage(response.message);
      }
    } catch {
      setErrorMessage("Ups, please contact the team");
    }
  };
  //New commit
  return (
    <div className={styles.loginPage}>
      <Link className={styles.backButton} to="/landing-page">
        Back
      </Link>
      <h1>Login</h1>
      <p>
        New here? <Link to="/register">Create an account</Link>.
      </p>
      <form onSubmit={onFormSubmitted} method="post">
        <label>Email</label>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
        />
        <br />

        <label>Password</label>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
        />

        <div className="rememberWrapper">
          <label>Remember this device</label>
          <input type="checkbox" id="remember" />
        </div>

        <input type="submit" value="Login" />
        <span>Login with Google</span>
        <p style={{ color: "red" }}>{errorMessage}</p>
      </form>
    </div>
  );
}
