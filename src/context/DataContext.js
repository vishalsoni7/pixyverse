import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  //   const { isLoggedIn } = useContext(AuthContext);

  const getuser = async () => {
    try {
      const {
        status,
        data: { users },
      } = await axios.get("/api/users");
      if (status === 200) {
        setUser(users);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getuser();
  }, []);

  const values = { user };
  return (
    <>
      <DataContext.Provider value={values}> {children} </DataContext.Provider>
    </>
  );
};
