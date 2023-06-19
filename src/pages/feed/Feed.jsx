import { NavLink, useNavigate } from "react-router-dom";
import { signOut } from "../../utils/authutils";
import { Users } from "../users/Users";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import "../feed/feed.css";
// import { NavBar } from "../../component/navbar/Navbar";

export const Feed = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(navigate);
  };

  return (
    <>
      {/* <NavBar /> */}
      <div className="feed-parent-div">
        {/* ---------- navigation ------------ */}
        <div className="feed-inner-div">
          <div className="sidebar">
            {" "}
            <FontAwesomeIcon icon={faHouse} />
            <h3>
              <NavLink className="feed-link" to="/home">
                Home
              </NavLink>
            </h3>{" "}
          </div>

          <div className="sidebar">
            {" "}
            <FontAwesomeIcon icon={faCompass} />{" "}
            <h3>
              <NavLink className="feed-link" to="/explore">
                Explore
              </NavLink>
            </h3>{" "}
          </div>

          <div className="sidebar">
            <FontAwesomeIcon icon={faBookmark} />{" "}
            <h3>
              <NavLink className="feed-link" to="/bookmark">
                Bookmarks
              </NavLink>
            </h3>
          </div>

          <div className="sidebar">
            <FontAwesomeIcon icon={faRightFromBracket} />{" "}
            <h3 className="signout" title="sign out" onClick={handleSignOut}>
              Sign Out
            </h3>{" "}
          </div>
        </div>
        {/* ---------- navigation ------------ */}

        {/* ---------- feeds ------------ */}

        {/* ---------- feeds ------------ */}

        {/* ---------- users------------ */}
        <div>
          <Users />
        </div>
        {/* ---------- users------------ */}
      </div>
    </>
  );
};
