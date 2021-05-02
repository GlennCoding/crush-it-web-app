import React from "react";
import styles from "./Button.module.scss";

export default function Button(props: ButtonProps) {
    return (
        <button
            className={`${styles.button} ${
                props.size === "sm"
                    ? styles.sm
                    : props.size === "md"
                    ? styles.md
                    : styles.lg
            } ${props.color === "white" ? styles.white : styles.primary}`}
            type={props.type}
        >
            {props.icon}
            {props.text}
        </button>
    );
}

interface ButtonProps {
    text?: string;
    size: "sm" | "md" | "lg";
    type?: "button" | "submit" | "reset";
    color: "primary" | "white";
    icon?: JSX.Element;
}
