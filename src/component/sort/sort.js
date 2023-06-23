import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import "../sort/sort.css";

export const Sort = () => {
  return (
    <div className="sort-parent">
      <p onClick={(e) => e.target.value}> Trending </p>
      <p> Latest </p>
    </div>
  );
};
