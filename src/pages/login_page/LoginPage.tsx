import React, { useState } from "react";
import styles from "./LoginPage.module.scss";
import { Link } from "react-router-dom";
import * as authServices from "../../services/auth_services";
import * as icons from "@material-ui/icons";
import Loader from "../../components/loader/Loader";
import { ids } from "webpack";
import TextInputWithLabel from "../../components/text_input_with_label/TextInputWithLabel";
import CheckBoxWithLabel from "../../components/check_box_with_label/CheckBoxWithLabel";

function GreenButton() {
    return;
}

function LogInForm(props: { setToken: (token: string) => void }) {
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
                setProcessing(false);
            }
        } catch {
            setErrorMessage("Ups, please contact the team");
            setProcessing(false);
        }
    };

    return (
        <>
            {processing && <Loader isProcessing />}
            <form
                className={styles.loginForm}
                onSubmit={onFormSubmitted}
                method="post"
            >
                <div className={styles.inputTextWrapper}>
                    <TextInputWithLabel
                        labelText="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        type={"email"}
                        id={"email"}
                        name={"email"}
                        required={true}
                    />
                </div>
                <div className={styles.inputTextWrapper}>
                    <TextInputWithLabel
                        labelText="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        type={"password"}
                        id={"password"}
                        name={"password"}
                        required={true}
                    />
                </div>

                <div className={styles.inputCheckboxWrapper}>
                    <CheckBoxWithLabel
                        labelText="Remember this device"
                        id={"remember"}
                        name={"remember"}
                        required={false}
                    />
                </div>

                <button className={styles.loginButton} type="submit">
                    Login
                </button>
                <button className={styles.loginButtonGoogle}>
                    Login with Google
                </button>
                <p style={{ color: "red" }}>{errorMessage}</p>
            </form>
        </>
    );
}

function BackButtonLarge(props: { setToken: (token: string) => void }) {
    return (
        <div>
            <Link to="/landing-page">
                <span className={styles.BackButtonLarge}>
                    <icons.ArrowBackRounded />
                </span>
            </Link>
        </div>
    );
}

export default function LoginPage(props: {
    setToken: (token: string) => void;
}) {
    return (
        <div className={styles.loginPage}>
            <BackButtonLarge setToken={props.setToken} />
            <h1 className={styles.pageHeader}>Login</h1>
            <p className={styles.createAccountNotice}>
                New here? <Link to="/register">Create an account</Link>.
            </p>
            <LogInForm setToken={props.setToken} />
        </div>
    );
}
