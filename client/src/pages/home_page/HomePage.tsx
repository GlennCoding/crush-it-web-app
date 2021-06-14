import React from "react";
import styles from "./HomePage.module.scss";
import Logo from "../../images/crush_it_logo/crush-it-logo-white-small.png";
import * as icons from "@material-ui/icons";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import FilterableWorkoutList from "./filterable_workout_list/FilterableWorkoutList";
import data from "./data";

interface HomePageProps {
  setToken: (token: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ setToken }) => {
  return (
    <div className={styles.homePage}>
      <button onClick={() => setToken("")}>Log Out</button>
      <nav className={styles.nav}>
        <span className={styles.navLogo}>
          <a href="#">
            <img src={Logo} alt="Crush It Logo" />
          </a>
        </span>
        <Link to="#">
          <icons.AccountCircleRounded className={styles.navProfile} />
        </Link>
      </nav>
      <div className={styles.headerWrapper}>
        <h1>Workouts</h1>
        <Button text="+ Add Workout" color="primary" size="md" />
      </div>
      <FilterableWorkoutList workouts={data} />
    </div>
  );
};

export default HomePage;
