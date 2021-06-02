import React, { useState } from "react";
import styles from "./CircuitList.module.scss";
import Circuit from "./circuit/Circuit";
import Button from "../../../components/button/Button";

interface Exercise {
  name: string;
  reps_amount: number;
  exercise_type: string;
  break_sec: number;
}

interface Circuit {
  id: number;
  setAmount: number;
  exercises: Exercise[];
  timeBetweenSetsSec: number;
}

interface CircuitListProps {
  data: Circuit[];
}

const CircuitList: React.FC<CircuitListProps> = ({ data }) => {
  const [circuits, setCircuits] = useState<Circuit[]>(data);

  const changeSetAmount = (index: number, operation: "add" | "remove") => {
    const newCircuits = circuits;
    if (operation === "remove" && circuits[index].setAmount > 1) {
      newCircuits[index].setAmount = newCircuits[index].setAmount - 1;
    } else if (operation === "add") {
      newCircuits[index].setAmount = newCircuits[index].setAmount + 1;
    }
    setCircuits([...newCircuits]);
  };
  const changeTimeBetweenSetSec = (
    index: number,
    operation: "add" | "remove"
  ) => {
    const newCircuits = circuits;
    if (operation === "remove" && circuits[index].timeBetweenSetsSec > 0) {
      newCircuits[index].timeBetweenSetsSec =
        newCircuits[index].timeBetweenSetsSec - 10;
    } else if (operation === "add") {
      newCircuits[index].timeBetweenSetsSec =
        newCircuits[index].timeBetweenSetsSec + 10;
    }
    setCircuits([...newCircuits]);
  };
  const addNewExercise = (index: number) => {
    const newExercise = {
      name: "Burpees",
      reps_amount: 20,
      exercise_type: "reps",
      break_sec: 30,
    };
    const newCircuits = circuits;
    newCircuits[index].exercises.push(newExercise);
    setCircuits([...newCircuits]);
  };
  const addNewCircuit = () => {
    const newCircuit = {
      id: circuits.length + 1,
      setAmount: 1,
      exercises: [],
      timeBetweenSetsSec: 0,
    };
    setCircuits(circuits.concat(newCircuit));
  };
  return (
    <div className={styles.circuitList}>
      {circuits.map((circuit, index) => {
        const { id, setAmount, exercises, timeBetweenSetsSec } = circuit;
        return (
          <Circuit
            key={id}
            id={id}
            index={index}
            setAmount={setAmount}
            exercises={exercises}
            timeBetweenSetsSec={timeBetweenSetsSec}
            changeSetAmount={changeSetAmount}
            changeTimeBetweenSetSec={changeTimeBetweenSetSec}
            addNewExercise={addNewExercise}
          />
        );
      })}
      <div onClick={() => addNewCircuit()}>
        <Button color="dark2" size="lg" text="+ Add Circuit" />
      </div>
    </div>
  );
};

export default CircuitList;
