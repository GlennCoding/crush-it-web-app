import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";

export default function LoginPage(props: {
  setToken: (token: string) => void;
}) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFormSubmitted = (event: any) => {
    event.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={styles.loginPage}>
      <Link className={styles.backButton} to="/landing">
        Back
      </Link>
      <h1>Login</h1>
      <p>
        New here? <a href="#">Create an account</a>.
      </p>
      <form onSubmit={onFormSubmitted} method="post">
        <label>Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
        />
        <br />

        <label>Password</label>
        <input
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
      </form>
    </div>
  );
}
