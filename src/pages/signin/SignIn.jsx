import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "../signin/signin.css";

export const Signin = () => {
  const { signinDetails, setSignInDetails, userSignIn, guestUser } =
    useContext(AuthContext);

  return (
    <div className="signin-parent-div">
      {" "}
      <h1> Pixyverse </h1>
      <div className="signin-container">
        <div>
          <h2>Sign In</h2>

          <div className="input-div">
            <p>Username</p>
            <input
              onChange={(e) =>
                setSignInDetails({
                  ...signinDetails,
                  username: e.target.value,
                })
              }
              required
              placeholder="vishalsoni"
              className="signin-input"
              type="text"
            />
          </div>

          <div className="input-div">
            <p> Password </p>
            <input
              onChange={(e) =>
                setSignInDetails({
                  ...signinDetails,
                  password: e.target.value,
                })
              }
              required
              placeholder="***********"
              className="signin-input"
              type="password"
            />
          </div>
          <div className="signin-btn-div">
            {" "}
            <button onClick={userSignIn} className="signin-btn">
              {" "}
              SIGN IN{" "}
            </button>
            <NavLink className="signin-page-link" to="/signup">
              {" "}
              <p> Create New Account </p>{" "}
            </NavLink>
            <p
              className="guest"
              onClick={() => guestUser("vishalsoni", "vishalsoni123")}
            >
              {" "}
              Sign In as Guest{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
