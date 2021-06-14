import React from "react";
import styles from "./TextInputWithLabel.module.scss";

interface TextInputWithLabelProps {
    labelText?: string;
    onChange?: (e: any) => void;
    value?: string;
    type?: string;
    id?: string;
    name?: string;
    required?: boolean;
}

const TextInputWithLabel = (props: TextInputWithLabelProps) => {
    const label = <label className={styles.label}>{props.labelText}</label>;
    return (
        <>
            {props.labelText && label}
            <input
                className={styles.inputText}
                onChange={props.onChange}
                value={props.value}
                type={props.type}
                id={props.id}
                name={props.name}
                required={props.required}
            />
        </>
    );
};

export default TextInputWithLabel;
