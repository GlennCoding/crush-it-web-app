import React from "react";
import styles from "./ButtonWhiteWithIcon.module.scss";

export default function ButtonWhiteWithIcon(props: ButtonWhiteWithIconProps) {
    return (
        <button
            className={`${styles.buttonWhiteWithIcon} ${
                props.radiusSize === "radiusSm"
                    ? styles.radiusSm
                    : styles.radiusLg
            }`}
            type={props.type}
        >
            {props.icon}
            {props.text}
        </button>
    );
}

interface ButtonWhiteWithIconProps {
    text?: string;
    radiusSize: "radiusSm" | "radiusLg";
    type?: "button" | "submit" | "reset";
    icon?: JSX.Element;
}
