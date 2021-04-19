import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.scss";
export default function SignupPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onFormSubmitted = (event: any) => {
    event.preventDefault();
    console.log(email, password);
  };
  return (
    <div className="signupPage">
      <Link className={styles.backButton} to="/landing">
        Back
      </Link>
      <h1>Create Account</h1>
      <form>
        <label className="formLabel">Your Name</label>
        <input type="text" name="name" id="name" />
        <label className="formLabel">Your Email</label>
        <input type="email" name="email" id="email" />
        <label className="formLabel">Your Password</label>
        <input type="password" name="password" id="password" />
        <div className="agreementWrapper">
          <label className="formLabelSmall">
            I agree to the Terms &amp; Conditions and Privacy Policy
          </label>
          <input type="checkbox" name="agreement" id="agreement" />
        </div>
        <input type="submit" value="Create account" />
      </form>
      <button className="signupButton">Sign up with Google</button>
      <p>
        Already have an account? <a href="#">Log in</a>.
      </p>
    </div>
  );
}
