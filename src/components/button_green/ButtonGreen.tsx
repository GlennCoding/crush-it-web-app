import React from "react";
import styles from "./ButtonGreen.module.scss";

export default function ButtonGreen(props: ButtonGreenProps) {
    return (
        <button
            className={`${styles.buttonGreen} ${
                props.radiusSize === "radiusSm"
                    ? styles.radiusSm
                    : styles.radiusLg
            }`}
            type={props.type}
        >
            {props.text}
        </button>
    );
}

interface ButtonGreenProps {
    text?: string;
    radiusSize: "radiusSm" | "radiusLg";
    type?: "button" | "submit" | "reset";
}
