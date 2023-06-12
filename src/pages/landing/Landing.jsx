import "../landing/landing.css";

import { NavLink } from "react-router-dom";

export const Landing = () => {
  return (
    <div className="landing-parent-div">
      <img src="landing img.svg" alt="landing" />
      <div className="landing-container">
        <h1 className="landing-heading">Welcome to Pixyverse </h1>

        <h1>
          FOLLOW{" "}
          <span className="landing-sub-title"> PEOPLE AROUND THE GLOBE </span>
        </h1>
        <h1>
          CONNECT <span className="landing-sub-title">WITH YOUR LOVED ONE</span>
        </h1>
        <h1>
          SHARE <span className="landing-sub-title">WHAT'S IN MIND</span>
        </h1>

        <div className="landing-btn-div">
          <NavLink to="/signup">
            <button className="landing-btn"> Join Now</button>
          </NavLink>

          <NavLink className="landing-signin-link" to="/signin">
            <p>Already have an account? </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
