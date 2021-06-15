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

export { WorkoutItem };
