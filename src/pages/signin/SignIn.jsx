import { NavLink } from "react-router-dom";
import "../signin/signin.css";

export const Signin = () => {
  return (
    <div className="signin-parent-div">
      {" "}
      <h1> Pixyverse </h1>
      <div className="signin-container">
        <div>
          <h2>Sign In</h2>

          <div className="input-div">
            <p>Email Address</p>
            <input
              placeholder="something@whatever.com"
              className="signin-input"
              type="email"
            />
          </div>

          <div className="input-div">
            <p> Password </p>
            <input
              placeholder="***********"
              className="signin-input"
              type="password"
            />
          </div>
          <div className="signin-btn-div">
            {" "}
            <button className="signin-btn"> SIGN IN </button>
            <NavLink className="signin-page-link" to="/signup">
              {" "}
              <p> Create New Account > </p>{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
