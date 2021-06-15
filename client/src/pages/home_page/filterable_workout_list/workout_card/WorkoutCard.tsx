import React from "react";
import { Link } from "react-router-dom";
import * as icons from "@material-ui/icons";
import styles from "./WorkoutCard.module.scss";
import Button from "../../../../components/button/Button";
import { Workout } from "../../../../interfaces/workout";

interface Props {
  workout: Workout;
}

const WorkoutCard: React.FC<Props> = ({ workout }) => {
  return (
    <div className={styles.workoutCard}>
      <div className={styles.workoutTopWrapper}>
        {/* Workout Name */}
        <h5 className={styles.workoutName}>{workout.name}</h5>
        {/* Edit Workout Button */}
        <Link
          to={{
            pathname: "/edit-workout",
            state: {
              workout: {},
            },
          }}
        >
          <Button text="Edit" size="sm" color="dark3" />
        </Link>
      </div>
      <div className={styles.workoutBottomWrapper}>
        <div className={styles.workoutInfoWrapper}>
          {/* Workout Description */}
          <div className={styles.workoutDescription}>
            {workout.description ?? "No Description"}
          </div>
          {/* Workout Info */}
          <div className={styles.workoutInfo}>
            <span>
              {workout.setTotalAmount} Sets, {workout.exerciseTotalAmount}
              Exercises
            </span>
          </div>
        </div>
        {/* Run Workout Button */}
        <button className={styles.runWorkoutButton}>
          <icons.PlayArrowRounded />
        </button>
      </div>
    </div>
  );
};

export default WorkoutCard;
