import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "../signup/signup.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  const { userSignUp } = useContext(AuthContext);

  const [signupDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const signUpHandler = () => {
    userSignUp(signupDetails, navigate);
  };

  return (
    <div className="signup-parent-div">
      <h1> Pixyverse </h1>
      <div className="signup-container">
        <h2>
          <FontAwesomeIcon icon={faRightToBracket} /> Sign Up
        </h2>

        <div className="signup-div">
          <p>First Name</p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, firstName: e.target.value })
            }
            placeholder="Vishal"
            className="signup-input"
            type="text"
          />
        </div>
        <div className="signup-div">
          <p>Last Name</p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, lastName: e.target.value })
            }
            placeholder="Soni"
            className="signup-input"
            type="text"
          />
        </div>

        <div className="signup-div">
          <p>Username</p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, username: e.target.value })
            }
            placeholder="vishalsoni"
            className="signup-input"
            type="text"
          />
        </div>

        <div className="signup-div">
          <p>Email Address</p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, email: e.target.value })
            }
            placeholder="something@whatever.com"
            className="signup-input"
            type="email"
          />
        </div>

        <div className="signup-div">
          <p> Password </p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, password: e.target.value })
            }
            placeholder="***********"
            className="signup-input"
            type="password"
          />
        </div>

        <div className="signup-div">
          <p>Confirm Password</p>
          <input
            onChange={(e) =>
              setSignUpDetails({
                ...signupDetails,
                confirmPassword: e.target.value,
              })
            }
            placeholder="***********"
            className="signup-input"
            type="password"
          />
        </div>

        <div className="signup-checkbox-div">
          <input type="checkbox" />
          <p> I accept all Terms & Conditions</p>
        </div>

        <button onClick={signUpHandler} className="signup-btn">
          Create New Account
        </button>
        <NavLink className="signup-page-link" to="/signin">
          <p> Already have an Account </p>
        </NavLink>
      </div>
    </div>
  );
};
