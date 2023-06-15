import { createContext } from "react";
import { Toaster } from "react-hot-toast";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const values = {
    // isLoggedIn,
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
