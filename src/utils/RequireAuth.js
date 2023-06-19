import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const RequireAuth = ({ children }) => {
  const { isLogin } = useContext(AuthContext);
  return <> {isLogin ? children : <Navigate to="/signin" />} </>;
};
