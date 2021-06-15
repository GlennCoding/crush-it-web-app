import React, { useState } from "react";
import styles from "./WorkoutEditPage.module.scss";
import * as icons from "@material-ui/icons";
import data from "./circuits";
import CircuitList from "./circuit_list/CircuitList";
  
interface WorkoutEditPageProps {
  name?: string;
  description?: string;
}

const WorkoutEditPage: React.FC<WorkoutEditPageProps> = ({
  name,
  description,
}) => {
  return (
    <div className={styles.page}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.container}>
          <icons.ChevronLeft className={styles.icon} />
          <h3>{name}</h3>
          <icons.Tune className={styles.icon} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      {/* Circuit List */}
      <CircuitList data={data} />
    </div>
  );
};

export default WorkoutEditPage;
