import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SignUpPage.module.scss";
import * as authServices from "../../services/auth_services";

export default function SignupPage(props: {
  setToken: (token: string) => void;
}) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onFormSubmitted = async (event: any) => {
    event.preventDefault();
    console.log(email, password, name);
    const response = await authServices.register({ email, name, password });
    if (response) {
      if (response.success) {
        props.setToken(response.token);
      } else {
        setErrorMessage(response.message);
      }
    }
  };

  return (
    <div className="signupPage">
      <Link className={styles.backButton} to="/landing">
        Back
      </Link>

      <h1>Create Account</h1>

      <form onSubmit={onFormSubmitted}>
        <label className="formLabel">Your Name</label>
        <input
          required
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          id="name"
        />

        <label className="formLabel">Your Email</label>
        <input
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email"
          id="email"
        />

        <label className="formLabel">Your Password</label>
        <input
          required
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          id="password"
        />

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
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}
