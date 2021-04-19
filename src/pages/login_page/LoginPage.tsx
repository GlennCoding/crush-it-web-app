import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";
import * as authServices from "../../services/auth_services";
import Loader from "../../components/loader/Loader";

export default function LoginPage(props: {
    setToken: (token: string) => void;
}) {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [processing, setProcessing] = useState<boolean>(false);

    const onFormSubmitted = async (event: any) => {
        event.preventDefault();

        setProcessing(true);
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
        setProcessing(false);
    };

    //New commit
    return (
        <div className={styles.loginPage}>
            {processing && <Loader isProcessing />}
            <Link className={styles.pageBackButton} to="/landing-page">
                Back
            </Link>
            <h1 className={styles.pageHeader}>Login</h1>
            <p className={styles.createAccountNotice}>
                New here? <Link to="/register">Create an account</Link>.
            </p>
            <form
                className={styles.loginForm}
                onSubmit={onFormSubmitted}
                method="post"
            >
                <div className={styles.inputTextWrapper}>
                    <label>Email</label>
                    <input
                        className={styles.inputTextField}
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type="email"
                        id="email"
                    />
                </div>
                <div className={styles.inputTextWrapper}>
                    <label>Password</label>
                    <input
                        className={styles.inputTextField}
                        required
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type="password"
                        id="password"
                    />
                </div>

                <div className={styles.inputCheckboxWrapper}>
                    <label>Remember this device</label>
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        id="remember"
                    />
                </div>

                <input
                    className={styles.loginButton}
                    type="submit"
                    value="Login"
                />
                <button className={styles.loginButtonGoogle}>
                    Login with Google
                </button>
                <p style={{ color: "red" }}>{errorMessage}</p>
            </form>
        </div>
    );
}
