import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

export const EditPost = ({ editpost }) => {
  const {
    initialState: { posts },
  } = useContext(DataContext);

  return <div></div>;
};
