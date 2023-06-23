import axios from "axios";
import toast from "react-hot-toast";

import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const userSignIn = async (creds) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", creds);
      if (status === 200) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        setIsSignIn(true);
        navigate("/home");
        toast.success(`Welcome ${foundUser.username}.`, {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#003153",
            color: "white",
            border: ".5px solid white",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Incorrect username or password", {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const userSignUp = async (signupDetails, navigate) => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", signupDetails);
      if (status === 201) {
        localStorage.setItem("user", JSON.stringify(createdUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        setIsSignIn(true);
        navigate("/home");
        toast.success(`Welcome ${signupDetails.username}.`, {
          style: {
            fontSize: "medium",
            padding: ".5rem",
            background: "#003153",
            color: "white",
            border: ".5px solid white",
          },
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Incorrect username or password", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user");
    localStorage.removeItem("guestUser");
    navigate("/signin");
    toast.error("Signed Out", {
      style: {
        fontSize: "medium",
        padding: ".5rem",
        background: "#003153",
        color: "white",
        border: ".5px solid white",
      },
    });
  };

  const values = {
    isSignIn,
    userSignIn,
    userSignUp,
    signOut,
    user,
  };

  return (
    <>
      <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
    </>
  );
};
