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

const TextInputWithLabel: React.FC<TextInputWithLabelProps> = ({
  labelText,
  onChange,
  value,
  type,
  id,
  name,
  required,
}) => {
  return (
    <>
      {labelText && <label className={styles.label}>{labelText}</label>}
      <input
        className={styles.inputText}
        onChange={onChange}
        value={value}
        type={type}
        id={id}
        name={name}
        required={required}
      />
    </>
  );
};

export default TextInputWithLabel;
