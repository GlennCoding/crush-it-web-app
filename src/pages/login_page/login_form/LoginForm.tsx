import React, { useState } from "react";
import styles from "./LoginForm.module.scss";

import * as authServices from "../../../services/auth_services";
import Loader from "../../../components/loader/Loader";

import TextInputWithLabel from "../../../components/text_input_with_label/TextInputWithLabel";
import CheckBoxWithLabel from "../../../components/check_box_with_label/CheckBoxWithLabel";
import ButtonGreen from "../../../components/button_green/ButtonGreen";
import ButtonWhiteWithIcon from "../../../components/button_white_with_icon/ButtonWhiteWithIcon";
import ErrorMessageText from "../../../components/error_message_text/ErrorMessageText";

export default function LoginForm(props: {
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

                <div className={styles.buttonWrapper}>
                    <ButtonGreen
                        text={"Login"}
                        type={"submit"}
                        radiusSize={"radiusLg"}
                    />
                </div>

                <div className={styles.buttonWrapper}>
                    <ButtonWhiteWithIcon
                        text={"Login with Google"}
                        radiusSize={"radiusLg"}
                    />
                </div>
                <ErrorMessageText errorMessage={errorMessage} />
            </form>
        </>
    );
}
