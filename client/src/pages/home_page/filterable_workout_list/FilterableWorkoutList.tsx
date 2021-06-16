import React, { useState, useContext, useEffect } from 'react'
import styles from './FilterableWorkoutList.module.scss'
import SearchBar from '../../../components/search_bar/SearchBar'
import WorkoutCard from './workout_card/WorkoutCard'
import axios, { AxiosResponse } from 'axios'
import { TokenContext } from '../../../context/token_context'
import NoWorkoutsComponent from './no_workouts_component/NoWorkoutsComponent'
import { Workout } from '../../../interfaces/workout'

interface Props {
    workouts: Workout[]
    setWorkoutList(a: Workout[]): void
}

const FilterableWorkoutList: React.FC<Props> = ({ workouts, setWorkoutList }) => {
    const tokenArgs = useContext(TokenContext)
    const [currentWorkoutName, setCurrentWorkoutName] = useState<string>('')

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCurrentWorkoutName(e.currentTarget.value)
    }

    const setWorkouts = async () => {
        const config = {
            headers: {
                authorization: `Bearer ${tokenArgs.value}`,
            },
        }
        let response: AxiosResponse
        try {
            response = await axios.get('/workouts', config)
        } catch (e) {
            return console.log(`Couldn't retrieve workout list. ${e}`)
        }
        if (response.data.success) {
            setWorkoutList(response.data.workouts)
        }
    }

    const componentDidMount = () => {
        setWorkouts()
    }

    useEffect(componentDidMount, [])

    return (
        <div>
            <div className={styles.searchBarWrapper}>
                <SearchBar value={currentWorkoutName} handleChange={handleChange} />
            </div>
            <div className="workoutList">{workouts.length === 0 ? <NoWorkoutsComponent /> : workouts.map((workout) => <WorkoutCard key={workout._id} workout={workout} />)}</div>
        </div>
    )
}

export default FilterableWorkoutList
