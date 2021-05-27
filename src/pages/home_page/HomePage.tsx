import React from "react";
import styles from "./HomePage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-white-small.png";
import * as icons from "@material-ui/icons";
// import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import SearchBar from "../../components/search_bar/SearchBar";

function WorkoutCard(props: { workoutItem: WorkoutItem }) {
  return (
    <div className={styles.workoutCard}>
      <div className={styles.workoutTopWrapper}>
        {/* Workout Name */}
        <h5 className={styles.workoutName}>{props.workoutItem.name}</h5>
        {/* Edit Workout Button */}
        <Button text="Edit" size="sm" color="dark3" />
      </div>
      <div className={styles.workoutBottomWrapper}>
        <div className={styles.workoutInfoWrapper}>
          {/* Workout Description */}
          <div className={styles.workoutDescription}>
            {props.workoutItem.description === ""
              ? "No Description"
              : props.workoutItem.description}
          </div>
          {/* Workout Info */}
          <div className={styles.workoutInfo}>
            <span>
              {props.workoutItem.info.numberOfSets} Sets,{" "}
              {props.workoutItem.info.numberOfExercises} Exercises
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
}

function WorkoutList(props: { workouts: WorkoutItem[] }) {
  const workoutItems = props.workouts.map((workout) => (
    <WorkoutCard key={workout.id} workoutItem={workout} />
  ));
  return <div className="workoutList">{workoutItems}</div>;
}

function FilterableWorkoutList(props: { workouts: WorkoutItem[] }) {
  return (
    <div>
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
      <WorkoutList workouts={props.workouts} />
    </div>
  );
}

function Navbar() {
  return (
    <nav className={styles.nav}>
      <span className={styles.navLogo}>
        <a href="#">
          <img src={Logo} alt="Crush It Logo" />
        </a>
      </span>
      {/* <Link to="#"> */}
      <icons.AccountCircleRounded className={styles.navProfile} />
      {/* </Link> */}
    </nav>
  );
}

function HomePage(props: { setToken?: (token: string) => void }) {
  return (
    <div className={styles.homePage}>
      {/* <button onClick={() => props.setToken("")}>Log Out</button> */}
      <Navbar />
      <div className={styles.headerWrapper}>
        <h1>Workouts</h1>
        <Button text="+ Add Workout" color="primary" size="md" />
      </div>
      <FilterableWorkoutList workouts={workouts} />
    </div>
  );
}

interface WorkoutItem {
  id: number;
  name: string;
  description: string;
  info: WorkoutInfo;
}
interface WorkoutInfo {
  numberOfSets: number;
  numberOfExercises: number;
}

const workouts: WorkoutItem[] = [
  {
    id: 0,
    name: "Workout 1",
    description: "",
    info: { numberOfSets: 8, numberOfExercises: 24 },
  },
  {
    id: 1,
    name: "Workout 2",
    description: "Morning workout",
    info: { numberOfSets: 8, numberOfExercises: 24 },
  },
  {
    id: 2,
    name: "Workout 3",
    description: "Evening workout",
    info: { numberOfSets: 8, numberOfExercises: 24 },
  },
];

export default HomePage;
