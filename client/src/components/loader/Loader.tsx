import React from "react";
import LoadingSVG from "../../images/loading.svg";
import styles from "./Loader.module.scss";

interface LoaderProps {
  isProcessing?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isProcessing }) => {
  return (
    <div className={styles.loader}>
      <img src={LoadingSVG} alt="Loading" />
    </div>
  );
};

export default Loader;
