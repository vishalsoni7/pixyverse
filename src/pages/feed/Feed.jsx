import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import "../feed/feed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { Users } from "../users/Users";
import { Explore } from "../explore/Explore";
import { Switch } from "../../component/switch/switch";
import { AuthContext } from "../../context/AuthContext";

export const Feed = () => {
  const { signOut } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="feed-parent-div">
        {/* ---------- navigation ------------ */}
        <div className="feed-inner-div">
          <div className="sidebar">
            {" "}
            <FontAwesomeIcon icon={faHouse} size="lg" />{" "}
            <h3>
              <NavLink className="feed-link" to="/home">
                Home
              </NavLink>
            </h3>{" "}
          </div>

          <div className="sidebar">
            {" "}
            <FontAwesomeIcon icon={faCompass} size="lg" />{" "}
            <h3>
              <NavLink className="feed-link" to="/explore">
                Explore
              </NavLink>
            </h3>{" "}
          </div>

          <div className="sidebar">
            <FontAwesomeIcon icon={faBookmark} size="lg" />
            <h3>
              <NavLink className="feed-link" to="/bookmark">
                Bookmarks
              </NavLink>
            </h3>
          </div>

          <div className="sidebar">
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />{" "}
            <h3 className="signout" title="sign out" onClick={signOut}>
              Sign Out
            </h3>{" "}
          </div>

          <div>
            <Switch />
          </div>
        </div>
        {/* ---------- navigation ------------ */}

        {/* ---------- feeds ------------ */}

        <Explore />

        {/* ---------- feeds ------------ */}

        {/* ---------- users------------ */}

        <Users />

        {/* ---------- users------------ */}
      </div>
    </>
  );
};
