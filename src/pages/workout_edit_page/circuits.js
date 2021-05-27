const exercises = [
    {
        name: "Burpees",
        reps_amount: 20,
        exercise_type: "reps",
        break_sec: 30
    },
    {
        name: "Push-Ups",
        reps_amount: 15,
        exercise_type: "reps",
        break_sec: 0
    },
    {
        name: "Pull-Ups",
        reps_amount: 10,
        exercise_type: "reps",
        break_sec: 30
    }
]

const circuits = [
    {
        id: 1,
        setAmount: 1,
        timeBetweenSetsSec: 180,
        exercises: exercises
    },
    {
        id: 2,
        setAmount: 1,
        timeBetweenSetsSec: 180,
        exercises: exercises
    }
]

export default circuits