import React, { useEffect, useState } from "react";
import styles from "./WorkoutEditPage.module.scss";
import * as icons from "@material-ui/icons";
import data from "./circuits";
import CircuitList from "./circuit_list/CircuitList";
import { Link } from "react-router-dom";
import { Workout } from "../../interfaces/workout";
import Loader from "../../components/loader/Loader";
interface WorkoutEditPageProps {
  workoutProps: Workout;
}

const WorkoutEditPage: React.FC<WorkoutEditPageProps> = ({ workoutProps }) => {
  const [workout, setWorkout] = useState<Workout>(workoutProps);
  const componentDidMount = () => {
    if (!workout) {
      //Create New Workout
      // POST /workout (authorization token)
      //Response -> workoutObject
    } else {
      //Get circutis based on the cirscuits ids
      setWorkout(workout);
      // GET /circuits () (body: workoutProps.circuitIds) (authorization token)
      //Response -> curcuits[]
    }
  };
  useEffect(componentDidMount, []);

  if (!workout) {
    return <Loader />;
  }

  return (
    <div className={styles.page}>
      {/* Navbar */}
      <div className={styles.navbar}>
        <div className={styles.container}>
          <Link to="/home">
            <icons.ChevronLeft className={styles.icon} />
          </Link>
          <h3>Workout 1</h3>
          <icons.Tune className={styles.icon} />
        </div>
        <p className={styles.description}>Workout Description</p>
      </div>
      <CircuitList data={data} />
    </div>
  );
};

export default WorkoutEditPage;
