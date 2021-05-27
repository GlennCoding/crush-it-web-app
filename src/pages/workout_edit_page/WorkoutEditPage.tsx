import React, { useState } from "react";
import styles from "./WorkoutEditPage.module.scss";
import * as icons from "@material-ui/icons";
import data from "./circuits";
import Button from "../../components/button/Button";

interface Exercise {
  name: string;
  reps_amount: number;
  exercise_type: string;
  break_sec: number;
}

interface Circuit {
  id: number;
  setAmount: number;
  timeBetweenSetsSec: number;
  exercises: Exercise[];
}

interface WorkoutEditPageProps {
  name: string;
  description?: string;
}

const WorkoutEditPage: React.FC<WorkoutEditPageProps> = ({
  name,
  description,
}) => {
  const [circuits, setCircuits] = useState<Circuit[]>(data);

  return (
    <div className={styles.page}>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <icons.ChevronLeft className={styles.icon} />
          <h3>{name}</h3>
          <icons.Tune className={styles.icon} />
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.circuitList}>
        <div className={styles.circuit}>
          <div className={styles.topRow}>
            <h5>Circuit 1</h5>
            <div className={styles.container}>
              <icons.RemoveCircleOutline className={styles.icon} />
              <p>{circuits[0].setAmount} sets</p>
              <icons.AddCircleOutline className={styles.icon} />
            </div>
          </div>
          <div className={styles.exerciseList}>
            <div className={styles.exercise}>
              <h5>Burpees</h5>
              <p>20 Reps · rest 30 sec</p>
            </div>
            <div className={styles.exercise}>
              <h5>Burpees</h5>
              <p>20 Reps · rest 30 sec</p>
            </div>
            <div className={styles.exercise}>
              <h5>Burpees</h5>
              <p>20 Reps · rest 30 sec</p>
            </div>
            <Button color="dark3" size="lg" text="+ Add Exercise" />
          </div>
          <div className={styles.bottomRow}>
            <p>Rest</p>
            <div className={styles.container}>
              <icons.RemoveCircleOutline className={styles.icon} />
              <p>{circuits[0].timeBetweenSetsSec} sec</p>
              <icons.AddCircleOutline className={styles.icon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutEditPage;
