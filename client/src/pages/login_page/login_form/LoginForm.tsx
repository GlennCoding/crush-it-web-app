import React, { useState } from "react";
import styles from "./LoginForm.module.scss";
import * as authServices from "../../../services/auth_services";

import Loader from "../../../components/loader/Loader";
import TextInputWithLabel from "../../../components/text_input_with_label/TextInputWithLabel";
import CheckBoxWithLabel from "../../../components/check_box_with_label/CheckBoxWithLabel";
import Button from "../../../components/button/Button";
import ErrorMessageText from "../../../components/error_message_text/ErrorMessageText";

interface LoginFormProps {
  setToken: (token: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setToken }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>(false);

  const onFormSubmitted = async (event: any) => {
    event.preventDefault();

    setProcessing(true);
    const response = await authServices.login({ email, password });
    if (!response) {
      setErrorMessage("Ups, please contact the team");
      setProcessing(false);
    } else {
      if (response.success) {
        setToken(response.token);
      } else {
        setErrorMessage(response.message);
        setProcessing(false);
      }
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
          <Button text="Login" type="submit" size="lg" color="primary" />
        </div>

        <div className={styles.buttonWrapper}>
          <Button text="Login with Google" size="lg" color="white" />
        </div>
        <ErrorMessageText errorMessage={errorMessage} />
      </form>
    </>
  );
};
export default LoginForm;
