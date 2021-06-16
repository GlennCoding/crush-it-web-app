import React from 'react'
import styles from './Circuit.module.scss'
import * as icons from '@material-ui/icons'
import Button from '../../../../components/button/Button'
import { Circuit } from '../../../../interfaces/circuit'

interface Props {
    index: number
    circuit: Circuit
    changeSetAmount: (id: number, operation: 'add' | 'remove') => void
    changeTimeBetweenSetSec: (id: number, operation: 'add' | 'remove') => void
    addNewExercise: (index: number) => void
}

const CircuitCard: React.FC<Props> = ({ circuit, index, changeSetAmount, changeTimeBetweenSetSec, addNewExercise }) => {
    return (
        <div className={styles.circuit}>
            {/* Circuit Top Row */}
            <div className={styles.topRow}>
                <h5>Circuit {index + 1}</h5>
                <div className={styles.container}>
                    <icons.RemoveCircleOutline
                        className={`${styles.icon}`}
                        onClick={() => changeSetAmount(index, 'remove')}
                    />
                    <p>{circuit.setAmount} sets</p>
                    <icons.AddCircleOutline className={styles.icon} onClick={() => changeSetAmount(index, 'add')} />
                </div>
            </div>
            {/* Exercise List */}
            <div className={styles.exerciseList}>
                {circuit.exercises.map((exercise, index) => {
                    const { name, reps_amount, break_sec } = exercise
                    return (
                        <div key={index} className={styles.exercise}>
                            <h5>{name}</h5>
                            <p>
                                {reps_amount} Reps {break_sec !== 0 && `· rest ${break_sec} sec`}
                            </p>
                        </div>
                    )
                })}
                <div onClick={() => addNewExercise(index)}>
                    <Button color="dark3" size="lg" text="+ Add Exercise" />
                </div>
            </div>
            {/* Circuit Bottom Row */}
            <div className={styles.bottomRow}>
                <p>Rest</p>
                <div className={styles.container}>
                    <icons.RemoveCircleOutline
                        className={styles.icon}
                        onClick={() => changeTimeBetweenSetSec(index, 'remove')}
                    />
                    <p>{circuit.timeBetweenSetsSec} sec</p>
                    <icons.AddCircleOutline
                        className={styles.icon}
                        onClick={() => changeTimeBetweenSetSec(index, 'add')}
                    />
                </div>
            </div>
        </div>
    )
}

export default CircuitCard
