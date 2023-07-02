import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import toast from "react-hot-toast";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "../signup/signup.css";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export const SignUp = () => {
  const { userSignUp } = useContext(AuthContext);
  const [isDisable, setIsDisable] = useState(true);

  const [signupDetails, setSignUpDetails] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();

  const handleBtn = () => {
    setIsDisable((pre) => !pre);
  };

  const signUpHandler = (e) => {
    e.preventDefault();
    if (
      signupDetails.name.trim() === "" ||
      signupDetails.username.trim() === "" ||
      signupDetails.email.trim() === "" ||
      signupDetails.password.trim() === "" ||
      signupDetails.confirmPassword.trim() === ""
    ) {
      toast.error("Please fill details!", {
        style: {
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    } else if (signupDetails.password !== signupDetails.confirmPassword) {
      toast.error("Password does not matched.", {
        style: {
          padding: ".5rem",
          background: "#252525",
          color: "whitesmoke",
        },
      });
    } else {
      userSignUp(signupDetails, navigate);
    }
  };

  return (
    <div className="signup-parent-div">
      <h1> Pixyverse </h1>
      <div className="signup-container">
        <h2>
          <FontAwesomeIcon icon={faRightToBracket} /> Sign Up
        </h2>

        <div className="signup-div">
          <p>Full Name</p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, name: e.target.value })
            }
            placeholder="Vishal Soni"
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
          <input type="checkbox" onClick={handleBtn} />
          <p> I accept all Terms & Conditions</p>
        </div>

        <button
          disabled={isDisable}
          onClick={signUpHandler}
          className="signup-btn"
        >
          Create New Account
        </button>
        <NavLink className="signup-page-link" to="/signin">
          <p> Already have an Account </p>
        </NavLink>
      </div>
    </div>
  );
};

{
  /* <div className="signup-div">
          <p>Last Name</p>
          <input
            onChange={(e) =>
              setSignUpDetails({ ...signupDetails, lastName: e.target.value })
            }
            placeholder="Soni"
            className="signup-input"
            type="text"
          />
        </div> */
}
