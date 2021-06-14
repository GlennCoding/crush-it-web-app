import React from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.scss";
import ButtonBackLarge from "../../components/button_back_large/ButtonBackLarge";
import SignUpForm from "./signup_form/SignUpForm";

interface SignupPageProps {
  setToken: (token: string) => void;
}

const SignupPage: React.FC<SignupPageProps> = ({ setToken }) => {
  return (
    <div className={styles.signUpPage}>
      <div className={styles.buttonBackWrapper}>
        <ButtonBackLarge linkDirection={"/landing-page"} />
      </div>
      <h1 className={styles.pageHeader}>Create Account</h1>
      <SignUpForm setToken={setToken} />
      <p className={styles.logInNotice}>
        Already have an account? <Link to="/login">Log in</Link>.
      </p>
    </div>
  );
};

export default SignupPage;
