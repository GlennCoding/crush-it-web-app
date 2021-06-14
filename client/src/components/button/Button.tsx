import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  text?: string;
  size: "sm" | "md" | "lg";
  color: "primary" | "white" | "dark2" | "dark3";
  type?: "button" | "submit" | "reset";
  icon?: JSX.Element;
  children?: () => JSX.Element | null;
}

const Button: React.FC<ButtonProps> = ({
  text,
  size,
  color,
  type,
  icon,
  children,
}) => {
  switch (size) {
    case "sm":
      size = styles.sm;
      break;
    case "md":
      size = styles.md;
      break;
    case "lg":
      size = styles.lg;
      break;
  }

  switch (color) {
    case "white":
      color = styles.white;
      break;
    case "primary":
      color = styles.primary;
      break;
    case "dark2":
      color = styles.dark2;
      break;
    case "dark3":
      color = styles.dark3;
      break;
  }

  return (
    <button className={`${styles.button} ${size} ${color}`} type={type}>
      {icon}
      {text}
    </button>
  );
};

export default Button;
