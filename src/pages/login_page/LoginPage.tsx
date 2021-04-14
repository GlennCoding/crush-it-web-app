import React from "react";
import styles from "./LoginPage.module.scss";

export default function LoginPage() {
    //Comment
    return (
        <div className={styles.loginPage}>
            <button>Back</button>
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
                <button>Login with Google</button>
            </form>
        </div>
    );
}
