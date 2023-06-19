import { createContext, useEffect, useReducer } from "react";

import { datareducer } from "../reducer/datareducer";
import { getAllUsers } from "../utils/userutils";
import { allPosts } from "../utils/postutils";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [initialState, dispatch] = useReducer(datareducer, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  useEffect(() => {
    getAllUsers(dispatch);
    allPosts(dispatch);
  }, []);

  const values = { initialState, dispatch };
  return (
    <>
      <DataContext.Provider value={values}> {children} </DataContext.Provider>
    </>
  );
};
