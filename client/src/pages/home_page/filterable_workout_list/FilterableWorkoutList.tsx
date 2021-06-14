import React, { useState } from "react";
import styles from "./FilterableWorkoutList.module.scss";
import SearchBar from "../../../components/search_bar/SearchBar";
import WorkoutCard from "./workout_card/WorkoutCard";

interface WorkoutInfo {
  numberOfSets: number;
  numberOfExercises: number;
}

interface WorkoutItem {
  id: number;
  name: string;
  description: string;
  info: WorkoutInfo;
}

interface FilterableWorkoutListProps {
  workouts: WorkoutItem[];
}

const FilterableWorkoutList: React.FC<FilterableWorkoutListProps> = ({
  workouts,
}) => {
  const [value, setValue] = useState<string>("");

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  console.log(value);
  return (
    <div>
      <div className={styles.searchBarWrapper}>
        <SearchBar value={value} handleChange={handleChange} />
      </div>
      <div className="workoutList">
        {workouts.map((workout) => (
          <WorkoutCard key={workout.id} {...workout} />
        ))}
      </div>
    </div>
  );
};

export default FilterableWorkoutList;
