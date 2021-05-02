import React, { useState, useEffect } from "react";
import styles from "./SignUpForm.module.scss";
import * as authServices from "../../../services/auth_services";

import Loader from "../../../components/loader/Loader";
import TextInputWithLabel from "../../../components/text_input_with_label/TextInputWithLabel";
import CheckBoxWithLabel from "../../../components/check_box_with_label/CheckBoxWithLabel";
import Button from "../../../components/button/Button";
import ErrorMessageText from "../../../components/error_message_text/ErrorMessageText";

export default function SignUpForm(props: {
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
        <>
            {processing && <Loader isProcessing />}
            <form className={styles.signUpForm} onSubmit={onFormSubmitted}>
                <div className={styles.inputTextWrapper}>
                    <TextInputWithLabel
                        labelText="Your Name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type={"text"}
                        id={"name"}
                        name={"name"}
                        required={true}
                    />
                </div>

                <div className={styles.inputTextWrapper}>
                    <TextInputWithLabel
                        labelText="Your Email"
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
                        labelText="Your Password"
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
                        labelText={
                            <>
                                I agree to the{" "}
                                <a href="#">Terms &amp; Conditions</a> and{" "}
                                <a href="#">Privacy Policy</a>
                            </>
                        }
                        id={"remember"}
                        name={"remember"}
                        required={false}
                    />
                </div>

                <div className={styles.buttonWrapper}>
                    <Button
                        text="Create account"
                        type="submit"
                        size="lg"
                        color="primary"
                    />
                </div>

                <div className={styles.buttonWrapper}>
                    <Button
                        text="Sign up with Google"
                        color="white"
                        size="lg"
                    />
                </div>
            </form>
            <ErrorMessageText errorMessage={errorMessage} />
        </>
    );
}
