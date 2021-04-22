import React from "react";
import { Link } from "react-router-dom";
import * as icons from "@material-ui/icons";
import styles from "./ButtonBackLarge.module.scss";

export default function ButtonBackLarge(props: { linkDirection: string }) {
    return (
        <div>
            <Link to={props.linkDirection} className={styles.BackButtonLarge}>
                <icons.ArrowBackRounded />
            </Link>
        </div>
    );
}
