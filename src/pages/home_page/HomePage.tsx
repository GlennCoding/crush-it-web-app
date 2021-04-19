import React from "react";

function WorkoutCard(props: { workoutItem: WorkoutItem }) {
  return (
    <div className="workoutCard">
      <div className="workoutCardTopRow">
        <h3 className="workoutName">{props.workoutItem.name}</h3>
        <button>+ Add New</button>
      </div>
      <div className="workoutCardBottomRow">
        <div>
          <p className="workoutDescription">{props.workoutItem.description}</p>
          <div className="workoutInfoContainer">
            <p className="workoutInfo">{props.workoutItem.info.numberOfSets}</p>
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
    <WorkoutCard workoutItem={workout} />
  ));
  return <div className="workoutList">{workoutItems}</div>;
}

function AddWorkoutButton() {
  return (
    <div className="addWorkoutButton">
      <a href="#">Add Workout</a>
    </div>
  );
}

function ExtendableWorkoutList(props: { workouts: WorkoutItem[] }) {
  return (
    <div className="extendableWorkoutList">
      <h1>Workouts</h1>
      <AddWorkoutButton />
      <WorkoutList workouts={props.workouts} />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="nav">
      <span className="navLogo">
        <a href="#">Crush It</a>
      </span>
      <span className="navProfile">
        <a href="#">Profile Picture</a>
      </span>
    </nav>
  );
}

function HomePage() {
  return (
    <div className="homePage">
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
