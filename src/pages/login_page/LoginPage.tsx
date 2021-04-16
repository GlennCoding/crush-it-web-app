import React from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className={styles.loginPage}>
      <Link className={styles.backButton} to="/landing">
        Back
      </Link>
      <h1>Login</h1>
      <p>
        New here? <a href="#">Create an account</a>.
      </p>
      <form action="#" method="post">
        <label>Email</label>
        <input type="email" name="email" id="email" />
        <br />

        <label>Password</label>
        <input type="password" name="password" id="password" />

        <div className="rememberWrapper">
          <label>Remember this device</label>
          <input type="checkbox" name="remember" id="remember" />
        </div>

        <input type="submit" value="Login" />
        <span>Login with Google</span>
      </form>
    </div>
  );
}
