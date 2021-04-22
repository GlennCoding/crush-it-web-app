import React from "react";
import styles from "./CheckBoxWithLabel.module.scss";

export default function CheckBoxWithLabel(props: CheckBoxWithLabelProps) {
    const label = <label>{props.labelText}</label>;
    return (
        <>
            {props.labelText && label}
            <input
                className={styles.inputCheckbox}
                type="checkbox"
                id={props.id}
                name={props.name}
                required={props.required}
            />
        </>
    );
}

interface CheckBoxWithLabelProps {
    labelText?: string;
    id?: string;
    name?: string;
    required?: boolean;
}
