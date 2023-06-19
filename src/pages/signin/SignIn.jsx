import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import "../signin/signin.css";

import { userSignIn } from "../../utils/authutils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

export const Signin = () => {
  const navigate = useNavigate();

  const [signinDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const handleLogIn = () => {
    userSignIn(signinDetails, navigate);
  };

  const handleGuest = () => {
    const credential = {
      username: "adarshbalak",
      password: "adarshBalak123",
    };
    userSignIn(credential, navigate);
  };

  return (
    <div className="signin-parent-div">
      {" "}
      <h1> Pixyverse </h1>
      <div className="signin-container">
        <div>
          <h2>
            {" "}
            <FontAwesomeIcon icon={faRightToBracket} /> Sign In
          </h2>

          <div className="input-div">
            <p>Username</p>
            <input
              onChange={(e) =>
                setSignInDetails({
                  ...signinDetails,
                  username: e.target.value,
                })
              }
              placeholder="username"
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
              placeholder="***********"
              className="signin-input"
              type="password"
            />
          </div>
          <div className="signin-btn-div">
            <button onClick={handleLogIn} className="signin-btn">
              SIGN IN
            </button>
            <NavLink className="signin-page-link" to="/signup">
              <p> Create New Account </p>
            </NavLink>
            <p className="guest" onClick={handleGuest}>
              Sign In as Guest
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
