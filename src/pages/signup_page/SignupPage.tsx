import React from "react";

export default function SignupPage() {
    return (
        <div className="signupPage">
            <button>Back</button>
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
