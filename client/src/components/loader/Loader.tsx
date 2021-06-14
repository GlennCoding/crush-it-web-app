import React from "react";
import LoadingSVG from "../../images/loading.svg";
import styles from "./Loader.module.scss";

const Loader = (props: { isProcessing: boolean }) => {
    return (
        <div className={styles.loader}>
            <img src={LoadingSVG} alt="Loading" />
        </div>
    );
};

export default Loader;
