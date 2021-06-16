import React, { useContext, useEffect, useState } from 'react'
import styles from './WorkoutEditPage.module.scss'
import * as icons from '@material-ui/icons'
import data from './circuits'
import CircuitList from './circuit_list/CircuitList'
import { Link } from 'react-router-dom'
import { Workout } from '../../interfaces/workout'
import Loader from '../../components/loader/Loader'
import { Circuit } from '../../interfaces/circuit'
import { addDefaultWorkout } from '../../services/workout_services'
import { getCircuitsByCircuitIds } from '../../services/circuit_services'
import { TokenContext } from '../../context/token_context'

interface Props {
    workoutProps: Workout
}

const WorkoutEditPage: React.FC<Props> = ({ workoutProps }) => {
    const [workout, setWorkout] = useState<Workout>(workoutProps)
    const [circuits, setCircuits] = useState<Circuit[]>()
    const [error, setError] = useState<string>()

    const tokenContext = useContext(TokenContext)

    const setWorkoutInitValue = async () => {
        const response = await addDefaultWorkout(tokenContext.value as string)

        if (response.data.success) {
            setWorkout(response.data.workout)
            setCircuits([])
        } else {
            setError('Something went wrong, please contact the administrator')
        }
    }

    const setCircuitsInitValue = async () => {
        const response = await getCircuitsByCircuitIds(tokenContext.value as string, workout.circuitIds)
        if (response.success) {
            setCircuits(response.circuits)
        } else {
            setError('Something went wrong, please contact the administrator')
        }
    }

    const componentDidMount = () => {
        if (!workout) {
            setWorkoutInitValue()
        } else {
            setCircuitsInitValue()
        }
    }

    useEffect(componentDidMount, [])

    if (!workout) {
        return <Loader />
    }

    return (
        <div className={styles.page}>
            <div className={styles.navbar}>
                <div className={styles.container}>
                    <Link to="/home">
                        <icons.ChevronLeft className={styles.icon} />
                    </Link>
                    <h3>{workout.name}</h3>
                    <icons.Tune className={styles.icon} />
                </div>
                <p className={styles.description}>{workout.description}</p>
            </div>

            {!circuits ? <Loader /> : <CircuitList data={circuits} />}
        </div>
    )
}

export default WorkoutEditPage
