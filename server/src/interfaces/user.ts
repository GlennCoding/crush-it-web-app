export interface User {
  email: string
  name: string
  createdOn: number
  exerciseIds: String[]
  workoutSettings: {
    soundEnabled: boolean
  }
  workoutIds: String[]
  password?: string
  _id?: string
}
