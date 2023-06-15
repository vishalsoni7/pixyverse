import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const Routes = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <div>
      <h1> Pixyverse </h1>
      <h3>
        <NavLink className="feed-link" to="/home">
          Home
        </NavLink>
      </h3>
      <h3>
        <NavLink className="feed-link" to="/explore">
          Explore
        </NavLink>
      </h3>
      <h3>
        <NavLink className="feed-link" to="/bookmark">
          Bookmarks
        </NavLink>
      </h3>
      <h3>
        <button onClick={signOut}> Sign Out </button>
      </h3>
    </div>
  );
};
