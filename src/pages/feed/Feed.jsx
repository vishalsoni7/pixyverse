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
import { Explore } from "../explore/Explore";
import { Switch } from "../../component/switch/switch";

export const Feed = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(navigate);
  };

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
            <h3 className="signout" title="sign out" onClick={handleSignOut}>
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
        <div>
          <Users />
        </div>
        {/* ---------- users------------ */}
      </div>
    </>
  );
};
