import { NavLink } from "react-router-dom";

import "../signup/signup.css";

export const SignUp = () => {
  return (
    <div className="signup-parent-div">
      <h1> Pixyverse </h1>
      <div className="signup-container">
        <h2>Sign Up</h2>

        <div className="signup-div">
          <p>Full Name</p>
          <input
            placeholder="Vishal Soni"
            className="signup-input"
            type="text"
          />{" "}
        </div>

        <div className="signup-div">
          {" "}
          <p>Username</p>
          <input
            placeholder="vishalsoni"
            className="signup-input"
            type="text"
          />{" "}
        </div>

        <div className="signup-div">
          {" "}
          <p>Email Address</p>
          <input
            placeholder="something@whatever.com"
            className="signup-input"
            type="email"
          />{" "}
        </div>

        <div className="signup-div">
          {" "}
          <p> Password </p>
          <input
            placeholder="***********"
            className="signup-input"
            type="password"
          />{" "}
        </div>

        <div className="signup-div">
          {" "}
          <p>Confirm Password</p>
          <input
            placeholder="***********"
            className="signup-input"
            type="password"
          />{" "}
        </div>

        <div className="signup-checkbox-div">
          <input type="checkbox" />
          <p> I accept all Terms & Conditions</p>
        </div>

        <button className="signup-btn"> Create New Account</button>
        <NavLink className="signup-page-link" to="/signin">
          <p> Already have an Account </p>{" "}
        </NavLink>
      </div>
    </div>
  );
};
