import axios from "axios";
import { useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [signinDetails, setSignInDetails] = useState({
    username: "",
    password: "",
  });

  const [signupDetails, setSignUpDetails] = useState({
    fullName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const userSignIn = async () => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", signinDetails);
      if (status === 200) {
        localStorage.setItem("signInDetails", JSON.stringify(foundUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        navigate("/userfeed");
        toast.success("Signed in successfully.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#003153",
            color: "whitesmoke",
            border: ".5px solid white",
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const userSignUp = async () => {
    try {
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", signupDetails);
      if (status === 201) {
        localStorage.setItem("signUpDetails", JSON.stringify(createdUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        navigate("/userfeed");
        toast.success("Signed up successfully.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#003153",
            color: "whitesmoke",
            border: ".5px solid white",
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const guestUser = async (username, password) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", {
        username,
        password,
      });
      if (status === 200) {
        localStorage.setItem("guestUser", JSON.stringify(foundUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        navigate("/userfeed");
        toast.success("Signed in as guest.", {
          style: {
            fontSize: "large",
            padding: ".5rem",
            background: "#003153",
            color: "whitesmoke",
            border: ".5px solid white",
          },
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("signInDetails");
    localStorage.removeItem("signUpDetails");
    localStorage.removeItem("guestUser");
    navigate("/signin");
  };

  const values = {
    signinDetails,
    setSignInDetails,
    userSignIn,
    signupDetails,
    setSignUpDetails,
    userSignUp,
    guestUser,
    signOut,
  };

  return (
    <>
      <AuthContext.Provider value={values}>
        {" "}
        {children}
        <Toaster position="bottom-right" reverseOrder={false} />
      </AuthContext.Provider>
    </>
  );
};
