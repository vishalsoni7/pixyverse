import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faCompass,
  faBookmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

import { DataContext } from "../../context/DataContext";

export const SideBar = () => {
  const { signOut, user } = useContext(AuthContext);
  const { allBookmark } = useContext(DataContext);
  const loginUser = JSON.parse(localStorage.getItem("user"));

  const encodedToken = localStorage.getItem("token");

  return (
    <>
      <div className="feed-inner-div">
        <div className="sidebar">
          <div className="sidebar-inner-div">
            <FontAwesomeIcon icon={faHouse} size="lg" />{" "}
            <h3>
              <NavLink className="feed-link" to="/home">
                Home
              </NavLink>
            </h3>
          </div>

          <div className="sidebar-inner-div">
            <FontAwesomeIcon icon={faCompass} size="lg" />{" "}
            <h3>
              <NavLink className="feed-link" to="/explore">
                Explore
              </NavLink>
            </h3>{" "}
          </div>

          <div className="sidebar-inner-div">
            <FontAwesomeIcon icon={faBookmark} size="lg" />
            <h3 onClick={() => allBookmark(encodedToken)}>
              <NavLink className="feed-link" to="/bookmark">
                Bookmarks
              </NavLink>
            </h3>
          </div>

          <div className="sidebar-inner-div">
            <FontAwesomeIcon icon={faRightFromBracket} size="lg" />{" "}
            <h3 className="signout" title="sign out" onClick={signOut}>
              Sign Out
            </h3>{" "}
          </div>
        </div>

        <NavLink className="feed-link" to="/userprofile">
          {" "}
          <div className="feed-user-div">
            <img src={loginUser?.profilePicture} className="profilePicture" />
            <div className="feed-user-about">
              <span> {loginUser?.name} </span>
              <span className="feed-username">
                @{loginUser?.username}{" "}
              </span>{" "}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
