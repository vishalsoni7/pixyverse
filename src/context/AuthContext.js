import axios from "axios";
import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  SignInUserName,
  IncorrectPswrdandUserName,
  SignOutToast,
  UpdateUser,
  HandleApiError,
} from "../ToastUtils";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isSignIn, setIsSignIn] = useState(false);

  const [user, setUser] = useState({});

  const [editUserModal, setEditUserModal] = useState(false);

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
      const {
        status,
        data: { createdUser, encodedToken },
      } = await axios.post("/api/auth/signup", signupDetails);
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
    setIsSignIn(false);
    SignOutToast();
  };

  const editUser = async (userData, encodedToken, setEditUserModal) => {
    try {
      const res = await axios.post(
        "/api/users/edit",
        { userData },
        {
          headers: { authorization: encodedToken },
        }
      );
      if (res.status === 201) {
        setUser(res.data.user);
        setEditUserModal(false);
        UpdateUser(res.data.user);
      }
    } catch (error) {
      console.error(error);
      HandleApiError();
    }
  };

  const values = {
    isSignIn,
    userSignIn,
    userSignUp,
    signOut,
    user,
    setUser,
    editUserModal,
    setEditUserModal,
    editUser,
  };

  return (
    <>
      <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
    </>
  );
};
