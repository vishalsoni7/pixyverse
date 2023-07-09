import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SignInUserName,
  IncorrectPswrdandUserName,
  SignOutToast,
} from "../ToastUtils";

import { AvatarOptions } from "../AvatarOptions";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const [user, setUser] = useState({});

  const [editUserModal, setEditUserModal] = useState(false);
  const [avatar, setAvatar] = useState(false);

  const navigate = useNavigate();

  const userSignIn = async (creds) => {
    try {
      const {
        status,
        data: { foundUser, encodedToken },
      } = await axios.post("/api/auth/login", creds);
      if (status === 200) {
        localStorage.setItem("user", JSON.stringify(foundUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        setUser(foundUser);
        setIsSignIn(true);
        SignInUserName(foundUser);
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
      IncorrectPswrdandUserName();
    }
  };

  const userSignUp = async (signupDetails, navigate) => {
    try {
      const { name, username, email, password, confirmPassword } =
        signupDetails;
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", {
        name,
        username,
        email,
        password,
        confirmPassword,
        profilePicture:
          AvatarOptions[Math.floor(Math.random() * AvatarOptions?.length)],
      });
      if (status === 201) {
        localStorage.setItem("user", JSON.stringify(createdUser));
        localStorage.setItem("token", JSON.stringify(encodedToken));
        setUser(createdUser);
        setIsSignIn(true);
        navigate("/home");
        SignInUserName(createdUser);
      }
    } catch (error) {
      console.error(error);
      IncorrectPswrdandUserName();
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("guestUser");
    navigate("/");
    setUser({});
    setIsSignIn(false);
    SignOutToast();
  };

  const values = {
    user,
    signOut,
    setUser,
    isSignIn,
    avatar,
    setAvatar,
    userSignIn,
    userSignUp,
    editUserModal,
    setEditUserModal,
  };

  return (
    <>
      <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
    </>
  );
};
