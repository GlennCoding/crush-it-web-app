import React, { useState } from "react";
import styles from "./ErrorMessageText.module.scss";

interface ErrorMessageTextProps {
  errorMessage: string;
}

const ErrorMessageText: React.FC<ErrorMessageTextProps> = ({
  errorMessage,
}) => {
  return <p className={styles.errorMessageText}>{errorMessage}</p>;
};

export default ErrorMessageText;
