import React from "react";
import styles from "./EditWorkoutModal.module.scss";
import Button from "../../../components/button/Button";

// interface EditWorkoutModalProps {}

const EditWorkoutModal = () => {
  return (
    <>
      <div className={`${styles.darkBackground} ${styles.showModal}`}></div>
      <div className={`${styles.modalContainer} ${styles.showModal}`}>
        <form onSubmit={() => console.log("submit")} className={styles.form}>
          <div className={styles.inputContainer}>
            <label>Workout Name</label>
            <input type="text" />
          </div>
          <Button color="primary" size="lg" type="submit" text="Save"></Button>
        </form>
      </div>
    </>
  );
};

export default EditWorkoutModal;
