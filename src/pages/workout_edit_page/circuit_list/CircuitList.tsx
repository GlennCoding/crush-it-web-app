import React, { useState } from "react";
import styles from "./CircuitList.module.scss";
import Circuit from "./circuit/Circuit";

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
  return (
    <div className={styles.circuitList}>
      {circuits.map((circuit, index) => {
        const { id, setAmount, exercises, timeBetweenSetsSec } = circuit;
        console.log("Set Amount " + setAmount);
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
          />
        );
      })}
    </div>
  );
};

export default CircuitList;
