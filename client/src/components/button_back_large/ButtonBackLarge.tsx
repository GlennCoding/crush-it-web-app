import React from "react";
import { Link } from "react-router-dom";
import * as icons from "@material-ui/icons";
import styles from "./ButtonBackLarge.module.scss";

interface ButtonBackLargeProps {
  linkDirection: string;
}

const ButtonBackLarge: React.FC<ButtonBackLargeProps> = ({ linkDirection }) => {
  return (
    <div>
      <Link to={linkDirection} className={styles.BackButtonLarge}>
        <icons.ArrowBackRounded />
      </Link>
    </div>
  );
};

export default ButtonBackLarge;
