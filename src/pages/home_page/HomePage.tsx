import React from "react";
import styles from "./HomePage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-white-small.png";

function WorkoutCard(props: { workoutItem: WorkoutItem }) {
    return (
        <div className="workoutCard">
            <div className="workoutCardTopRow">
                <h3 className="workoutName">{props.workoutItem.name}</h3>
                <button>+ Add New</button>
            </div>
            <div className="workoutCardBottomRow">
                <div>
                    <p className="workoutDescription">
                        {props.workoutItem.description}
                    </p>
                    <div className="workoutInfoContainer">
                        <p className="workoutInfo">
                            {props.workoutItem.info.numberOfSets}
                        </p>
                        <p className="workoutInfo">
                            {props.workoutItem.info.numberOfExercises}
                        </p>
                    </div>
                </div>
                <button>Play Workout</button>
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
        <div className={styles.searchBar}>
            <input
                className={styles.searchInput}
                type="text"
                name="searchInput"
                id="searchInput"
            />
            <button className={styles.searchButtton}>Search</button>
        </div>
    );
}

function AddWorkoutButton() {
    return (
        <div className={styles.addWorkoutButton}>
            <a href="#">+ Add Workout</a>
        </div>
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
            <span className={styles.navProfile}>
                <a href="#">Profile Picture</a>
            </span>
        </nav>
    );
}

function HomePage(props: { setToken: (token: string) => void }) {
    return (
        <div className={styles.homePage}>
            {/* <button onClick={() => props.setToken("")}>Log Out</button> */}
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
