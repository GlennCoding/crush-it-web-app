import React from "react";
import { Link } from "react-router-dom";
import * as icons from "@material-ui/icons";
import styles from "./WorkoutCard.module.scss";
import Button from "../../../../components/button/Button";

interface WorkoutInfo {
  numberOfSets: number;
  numberOfExercises: number;
}

interface WorkoutCardProps {
  id: number;
  name: string;
  description: string;
  info: WorkoutInfo;
}

const WorkoutCard: React.FC<WorkoutCardProps> = ({
  id,
  name,
  description,
  info,
}) => {
  return (
    <div className={styles.workoutCard}>
      <div className={styles.workoutTopWrapper}>
        {/* Workout Name */}
        <h5 className={styles.workoutName}>{name}</h5>
        {/* Edit Workout Button */}
        <Link to="/edit">
          <Button text="Edit" size="sm" color="dark3" />
        </Link>
      </div>
      <div className={styles.workoutBottomWrapper}>
        <div className={styles.workoutInfoWrapper}>
          {/* Workout Description */}
          <div className={styles.workoutDescription}>
            {description === "" ? "No Description" : description}
          </div>
          {/* Workout Info */}
          <div className={styles.workoutInfo}>
            <span>
              {info.numberOfSets} Sets, {info.numberOfExercises} Exercises
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
