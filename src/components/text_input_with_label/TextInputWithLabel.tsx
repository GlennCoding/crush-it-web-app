import React from "react";
import styles from "./TextInputWithLabel.module.scss";

export default function TextInputWithLabel(props: TextInputWithLabelProps) {
    const label = <label>{props.labelText}</label>;
    return (
        <>
            {props.labelText && label}
            <input
                className={styles.inputText}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                id={props.id}
                required={props.required}
            />
        </>
    );
}

interface TextInputWithLabelProps {
    labelText?: string;
    onChange?: (e: any) => void;
    value?: string;
    type?: string;
    id?: string;
    required?: boolean;
}
