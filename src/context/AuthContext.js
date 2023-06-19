import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(true);
  const values = { isLogin, setIsLogin };

  return (
    <>
      <AuthContext.Provider value={values}> {children}</AuthContext.Provider>
    </>
  );
};
