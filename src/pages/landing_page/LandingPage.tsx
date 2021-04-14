import React from "react";
import styles from "./LandingPage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-black-normal.png";

export default function LandingPage() {
    return (
        <div className={styles.landingPage}>
            <div className={styles.logoWrapper}>
                <img src={Logo} alt="Crush It Logo" className={styles.logo} />
            </div>
            <div className={styles.buttonWrapper}>
                <a className={styles.loginButton}>Login</a>
                <a className={styles.signupButton}>Signup</a>
            </div>
        </div>
    );
}
