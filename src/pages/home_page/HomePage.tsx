import React from "react";
import styles from "./HomePage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-white-small.png";
import * as icons from "@material-ui/icons";
import { Link } from "react-router-dom";

function WorkoutInfo(props: { info: WorkoutInfo }) {
    return (
        <div className={styles.workoutInfo}>
            <span>
                {props.info.numberOfSets} Sets, {props.info.numberOfExercises}{" "}
                Exercises
            </span>
        </div>
    );
}

function WorkoutDescription(props: { description: string }) {
    return <div className={styles.workoutDescription}>{props.description}</div>;
}

function RunWorkoutButton() {
    return (
        <button className={styles.runWorkoutButton}>
            <icons.PlayArrowRounded />
        </button>
    );
}

function EditWorkoutButton() {
    return <button className={styles.editWorkoutButton}>Edit</button>;
}

function WorkoutName(props: { name: string }) {
    return <h5 className={styles.workoutName}>{props.name}</h5>;
}

function WorkoutCard(props: { workoutItem: WorkoutItem }) {
    return (
        <div className={styles.workoutCard}>
            <div className={styles.workoutTopWrapper}>
                <WorkoutName name={props.workoutItem.name} />
                <EditWorkoutButton />
            </div>
            <div className={styles.workoutBottomWrapper}>
                <div className={styles.workoutInfoWrapper}>
                    <WorkoutDescription
                        description={props.workoutItem.description}
                    />
                    <WorkoutInfo info={props.workoutItem.info} />
                </div>
                <RunWorkoutButton />
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

function SearchBar() {
    return (
        <div className={styles.searchBarWrapper}>
            <input
                className={styles.searchInput}
                type="text"
                name="searchInput"
                id="searchInput"
            />
            <button className={styles.searchButton}>
                <icons.SearchRounded />
            </button>
        </div>
    );
}

function AddWorkoutButton() {
    return (
        <a href="">
            <div className={styles.addWorkoutButton}>+ Add Workout</div>
        </a>
    );
}

function ExtendableWorkoutList(props: { workouts: WorkoutItem[] }) {
    return (
        <div className="extendableWorkoutList">
            <div className={styles.headerWrapper}>
                <h1>Workouts</h1>
                <AddWorkoutButton />
            </div>
            <SearchBar />
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
            <Link to="#">
                <icons.AccountCircleRounded className={styles.navProfile} />
            </Link>
        </nav>
    );
}

function HomePage(props: { setToken: (token: string) => void }) {
    return (
        <div className={styles.homePage}>
            <button onClick={() => props.setToken("")}>Log Out</button>
            <Navbar />
            <ExtendableWorkoutList workouts={workouts} />
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
        description: "No Description",
        info: { numberOfSets: 8, numberOfExercises: 24 },
    },
    {
        id: 1,
        name: "Workout 2",
        description: "No Description",
        info: { numberOfSets: 8, numberOfExercises: 24 },
    },
    {
        id: 2,
        name: "Workout 3",
        description: "No Description",
        info: { numberOfSets: 8, numberOfExercises: 24 },
    },
];

export default HomePage;
