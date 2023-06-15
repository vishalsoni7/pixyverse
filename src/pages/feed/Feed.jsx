import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { DataContext } from "../../context/DataContext";
import { signOut } from "../../utils/authutils";

import "../feed/feed.css";

export const Feed = () => {
  const { user } = useContext(DataContext);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(navigate);
  };

  return (
    <div className="feed-parent-div">
      {/* ---------- navigation ------------ */}
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
          <button onClick={handleSignOut}> Sign Out </button>
        </h3>
      </div>
      {/* ---------- navigation ------------ */}

      {/* ---------- users------------ */}
      <div>
        <input placeholder="search users..." className="user-search " />
        <h3> Suggestions </h3>
        <div className="user-parent-div">
          {user.map((person) => (
            <>
              <div className="user-profiles">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "3rem",
                    justifyContent: "center",
                  }}
                >
                  <h4>
                    {person.firstName} {person.lastName}{" "}
                  </h4>
                  <button className="user-btn"> Follow </button>{" "}
                </div>

                {person.username}
              </div>
            </>
          ))}
        </div>
      </div>
      {/* ---------- users------------ */}
    </div>
  );
};
