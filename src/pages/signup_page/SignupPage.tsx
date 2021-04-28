import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.scss";
import * as authServices from "../../services/auth_services";
import axios from "axios";
import Loader from "../../components/loader/Loader";
import ButtonBackLarge from "../../components/button_back_large/ButtonBackLarge";

export default function SignupPage(props: {
    setToken: (token: string) => void;
}) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [processing, setProcessing] = useState<boolean>(false);

    useEffect(() => {});

    const onFormSubmitted = async (event: any) => {
        event.preventDefault();
        setProcessing(true);
        console.log(email, password, name);
        try {
            const response = await authServices.register({
                email,
                name,
                password,
            });
            if (response.success) {
                props.setToken(response.token);
            } else {
                setErrorMessage(response.message);
                setProcessing(false);
            }
        } catch {
            setErrorMessage("Ups, please contact the team");
            setProcessing(false);
        }
    };

    return (
        <div className={styles.signUpPage}>
            {processing && <Loader isProcessing />}
            <div className={styles.buttonBackWrapper}>
                <ButtonBackLarge linkDirection={"/landing-page"} />
            </div>
            <h1 className={styles.pageHeader}>Create Account</h1>

            <form className={styles.signUpForm} onSubmit={onFormSubmitted}>
                <div className={styles.inputTextWrapper}>
                    <label className="formLabel">Your Name</label>
                    <input
                        className={styles.inputTextField}
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="name"
                    />
                </div>

                <div className={styles.inputTextWrapper}>
                    <label className="formLabel">Your Email</label>
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
                    <label className="formLabel">Your Password</label>
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
                    <label>
                        I agree to the <a href="#">Terms &amp; Conditions</a>{" "}
                        and <a href="#">Privacy Policy</a>
                    </label>
                    <input
                        className={styles.inputCheckbox}
                        type="checkbox"
                        name="agreement"
                        id="agreement"
                    />
                </div>

                <input
                    className={styles.signUpButton}
                    type="submit"
                    value="Create account"
                />
                <button className={styles.signUpButtonGoogle}>
                    Sign up with Google
                </button>
            </form>

            <p>
                Already have an account? <Link to="/login">Log in</Link>.
            </p>

            <p style={{ color: "red" }}>{errorMessage}</p>
        </div>
    );
}
