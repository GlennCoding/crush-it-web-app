import React from "react";
import styles from "./LandingPage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-black-normal.png";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <div className={styles.logoWrapper}>
        <img src={Logo} alt="Crush It Logo" className={styles.logo} />
      </div>
      <div className={styles.buttonWrapper}>
        <Link className={styles.loginButton} to="/login">
          Login
        </Link>
        <Link className={styles.signupButton} to="/register">
          Sign Up
        </Link>
      </div>
    </div>
  );
}
