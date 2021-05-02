import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
    text?: string;
    size: "sm" | "md" | "lg";
    type?: "button" | "submit" | "reset";
    color: "primary" | "white" | "dark3";
    icon?: JSX.Element;
}

const Button = (props: ButtonProps) => {
    return (
        <button
            className={`${styles.button} ${
                props.size === "sm"
                    ? styles.sm
                    : props.size === "md"
                    ? styles.md
                    : styles.lg
            } ${
                props.color === "white"
                    ? styles.white
                    : props.color === "dark3"
                    ? styles.dark3
                    : styles.primary
            }`}
            type={props.type}
        >
            {props.icon}
            {props.text}
        </button>
    );
};

export default Button;
