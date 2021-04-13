import React from "react";

function WorkoutCard(props: { workoutItem: WorkoutItem }) {
    return (
        <div className="workout-card">
            <div className="workout-card-top-row">
                <h3 className="workout-name">{props.workoutItem.name}</h3>
                <p className="workout-description">
                    {props.workoutItem.description}
                </p>
                <p className="workout-info">
                    {props.workoutItem.info.numberOfSets}
                </p>
                <p className="workout-info">
                    {props.workoutItem.info.numberOfExercises}
                </p>
            </div>
        </div>
    );
}

function WorkoutList(props: { workouts: WorkoutItem[] }) {
    const workoutItems = props.workouts.map((workout) => (
        <WorkoutCard workoutItem={workout} />
    ));
    return <div className="workout-list">{workoutItems}</div>;
}

function AddWorkoutButton() {
    return (
        <div className="add-workout-button">
            <a href="#">Add Workout</a>
        </div>
    );
}

function ExtendableWorkoutList(props: { workouts: WorkoutItem[] }) {
    return (
        <div className="extendable-workout-list">
            <h1>Workouts</h1>
            <AddWorkoutButton />
            <WorkoutList workouts={props.workouts} />
        </div>
    );
}

function Navbar() {
    return (
        <nav className="nav">
            <span className="nav-logo">
                <a href="#">Crush It</a>
            </span>
            <span className="nav-profile">
                <a href="#">Profile Picture</a>
            </span>
        </nav>
    );
}

function HomePage() {
    return (
        <div className="container">
            <p>Hello World</p>
            <Navbar />
            <ExtendableWorkoutList workouts={workouts} />
        </div>
    );
}

interface WorkoutItem {
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
        name: "Workout 1",
        description: "No Description",
        info: { numberOfSets: 8, numberOfExercises: 24 },
    },
    {
        name: "Workout 2",
        description: "No Description",
        info: { numberOfSets: 8, numberOfExercises: 24 },
    },
    {
        name: "Workout 3",
        description: "No Description",
        info: { numberOfSets: 8, numberOfExercises: 24 },
    },
];

export default HomePage;
