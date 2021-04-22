import React, { useState } from "react";
import styles from "./ErrorMessageText.module.scss";

export default function ErrorMessageText(props: { errorMessage: string }) {
    return <p className={styles.errorMessageText}>{props.errorMessage}</p>;
}
