import React, { useContext, useState } from "react";
import styles from "./HomePage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-white-small.png";
import * as icons from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import FilterableWorkoutList from "./filterable_workout_list/FilterableWorkoutList";
import { TokenContext } from "../../context/token_context";
import { Workout } from "../../interfaces/workout";

interface Props {}

const homePage: React.FC<Props> = ({}) => {
  const [currentWorkoutList, setCurrentWorkoutList] = useState<Workout[]>([]);
  const tokenContext = useContext(TokenContext);

  return (
    <div className={styles.homePage}>
      <button onClick={() => tokenContext.set("")}>Log Out</button>
      <nav className={styles.nav}>
        <span className={styles.navLogo}>
          <a href="#">
            <img src={Logo} alt="Crush It Logo" />
          </a>
        </span>
        <Link to={"/profile"}>
          <icons.AccountCircleRounded className={styles.navProfile} />
        </Link>
      </nav>
      <div className={styles.headerWrapper}>
        <h1>Workouts</h1>
        <Link
          to={{
            pathname: "/edit-workout",
            state: {
              workout: null,
            },
          }}
        >
          <Button text="+ Add Workout" color="primary" size="md" />
        </Link>
      </div>
      <FilterableWorkoutList
        setWorkoutList={setCurrentWorkoutList}
        workouts={currentWorkoutList}
      />
    </div>
  );
};

export default homePage;
