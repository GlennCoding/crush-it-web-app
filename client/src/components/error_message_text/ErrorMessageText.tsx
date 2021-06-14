import React, { useState } from "react";
import styles from "./ErrorMessageText.module.scss";

const ErrorMessageText = (props: { errorMessage: string }) => {
    return <p className={styles.errorMessageText}>{props.errorMessage}</p>;
};

export default ErrorMessageText;
