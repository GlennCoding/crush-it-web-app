import React from "react";
import styles from "./CheckBoxWithLabel.module.scss";

interface CheckBoxWithLabelProps {
  labelText?: string | any; // TODO: Find fitting type for JSX element
  id?: string;
  name?: string;
  required?: boolean;
}

const CheckBoxWithLabel: React.FC<CheckBoxWithLabelProps> = ({
  labelText,
  id,
  name,
  required,
}) => {
  const label = <label>{labelText}</label>;
  return (
    <>
      {labelText && label}
      <input
        className={styles.inputCheckbox}
        type="checkbox"
        id={id}
        name={name}
        required={required}
      />
    </>
  );
};

export default CheckBoxWithLabel;
