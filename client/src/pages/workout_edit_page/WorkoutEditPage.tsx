import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./WorkoutEditPage.module.scss";
import * as icons from "@material-ui/icons";
import data from "./circuits";
import CircuitList from "./circuit_list/CircuitList";
import EditWorkoutModal from "./edit_workout_modal/EditWorkoutModal";

interface WorkoutEditPageProps {
  name?: string;
  description?: string;
}

const WorkoutEditPage: React.FC<WorkoutEditPageProps> = ({
  name,
  description,
}) => {
  const [currentModal, setCurrentModal] = useState("");

  return (
    <div className={styles.page}>
      <EditWorkoutModal />
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/home">
            <icons.ChevronLeft className={styles.icon} />
          </Link>
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
