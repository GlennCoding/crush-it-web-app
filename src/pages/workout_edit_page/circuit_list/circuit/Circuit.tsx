import React from "react";
import styles from "./Circuit.module.scss";
import * as icons from "@material-ui/icons";
import Button from "../../../../components/button/Button";

interface Exercise {
  name: string;
  reps_amount: number;
  exercise_type: string;
  break_sec: number;
}

interface CircuitProps {
  id: number;
  index: number;
  setAmount: number;
  exercises: Exercise[];
  timeBetweenSetsSec: number;
  changeSetAmount: (id: number, operation: "add" | "remove") => void;
  changeTimeBetweenSetSec: (id: number, operation: "add" | "remove") => void;
}

const Circuit: React.FC<CircuitProps> = ({
  id,
  index,
  setAmount,
  exercises,
  timeBetweenSetsSec,
  changeSetAmount,
  changeTimeBetweenSetSec,
}) => {
  return (
    <div className={styles.circuit}>
      {/* Circuit Top Row */}
      <div className={styles.topRow}>
        <h5>Circuit {index + 1}</h5>
        <div className={styles.container}>
          <icons.RemoveCircleOutline
            className={`${styles.icon}`}
            onClick={() => changeSetAmount(index, "remove")}
          />
          <p>{setAmount} sets</p>
          <icons.AddCircleOutline
            className={styles.icon}
            onClick={() => changeSetAmount(index, "add")}
          />
        </div>
      </div>
      {/* Exercise List */}
      <div className={styles.exerciseList}>
        {exercises.map((exercise, index) => {
          const { name, reps_amount, break_sec } = exercise;
          return (
            <div key={index} className={styles.exercise}>
              <h5>{name}</h5>
              <p>
                {reps_amount} Reps{" "}
                {break_sec !== 0 && `· rest ${break_sec} sec`}
              </p>
            </div>
          );
        })}
        <Button color="dark3" size="lg" text="+ Add Exercise" />
      </div>
      {/* Circuit Bottom Row */}
      <div className={styles.bottomRow}>
        <p>Rest</p>
        <div className={styles.container}>
          <icons.RemoveCircleOutline
            className={styles.icon}
            onClick={() => changeTimeBetweenSetSec(index, "remove")}
          />
          <p>{timeBetweenSetsSec} sec</p>
          <icons.AddCircleOutline
            className={styles.icon}
            onClick={() => changeTimeBetweenSetSec(index, "add")}
          />
        </div>
      </div>
    </div>
  );
};

export default Circuit;
