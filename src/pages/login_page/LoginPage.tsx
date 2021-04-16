import React from "react";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
    //Comment
    return (
        <div className={styles.loginPage}>
            <button className={styles.backButton}>Back</button>
            <h1 className={styles.heading}>Login</h1>
            <p className={styles.createAccount}>
                New here? <a href="#">Create an account</a>.
            </p>
            <form className={styles.loginForm} action="#" method="post">
                <div className={styles.inputTextWrapper}>
                    <label className={styles.formLabel} htmlFor="email">
                        Email
                    </label>
                    <input
                        className={styles.formInputText}
                        type="email"
                        name="email"
                        id="email"
                    />

                    <label className={styles.formLabel} htmlFor="password">
                        Password
                    </label>
                    <input
                        className={styles.formInputText}
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>

                <div className={styles.rememberWrapper}>
                    <label className={styles.formLabel} htmlFor="remember">
                        Remember this device
                    </label>
                    <input type="checkbox" name="remember" id="remember" />
                </div>

                <input
                    className={styles.loginButton}
                    type="submit"
                    value="Login"
                />
                <button className={styles.loginWithGoogle}>
                    Login with Google
                </button>
            </form>
        </div>
    );
}
