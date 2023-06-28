import { useContext, useState } from "react";
import "../users/user.css";

import { DataContext } from "../../context/DataContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const Users = () => {
  const {
    initialState: { users },
    followUser,
    unfollowUser,
  } = useContext(DataContext);

  const [searchUser, setSearchUser] = useState("");

  const currentUser = JSON.parse(localStorage.getItem("user"));

  const encodedToken = localStorage.getItem("token");

  const showUser = users.filter(
    (person) => person?.username !== currentUser?.username
  );

  const handleInput =
    searchUser.trim()?.length > 0 &&
    showUser.filter(({ name }) =>
      name.toLowerCase().includes(searchUser.trim().toLocaleLowerCase())
    );

  const handlefollow = (personId) => {
    return showUser.find((item) => item._id == personId);
  };

  return (
    <div className="user-main-div">
      <div className="user-search-div">
        <span className="search-icon">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </span>
        <input
          value={searchUser}
          onChange={(e) => setSearchUser(e.target.value)}
          placeholder="Search Pixyverse"
        />{" "}
      </div>

      {searchUser.trim().length > 0 && (
        <div> {handleInput.length === 0 && <h4> No User found </h4>} </div>
      )}

      {handleInput.length > 0 && (
        <div className="user-div-A">
          {searchUser.length > 0 &&
            handleInput.map((person) => (
              <div key={person._id} className="user-div-B">
                <div className="user-div-C">
                  <div>
                    <img
                      src={person?.profilePicture}
                      className="profilePicture"
                    />
                  </div>{" "}
                  <div className="user-div-D">
                    <span> {person?.name} </span>
                    <small> @{person?.username} </small>
                  </div>
                </div>
                <div>
                  <button className="user-btn"> Follow </button>
                </div>{" "}
              </div>
            ))}{" "}
        </div>
      )}

      <div className="user-div-A">
        <h2> Who to follow </h2>
        {showUser.map((person) => (
          <div key={person._id} className="user-div-B">
            <div className="user-div-C">
              <div>
                <img src={person?.profilePicture} className="profilePicture" />
              </div>{" "}
              <div className="user-div-D">
                <span> {person?.name} </span>
                <small> @{person?.username} </small>
              </div>
            </div>
            <div>
              {!handlefollow(person._id) ? (
                <button
                  onClick={() => unfollowUser(encodedToken, person._id)}
                  className="user-btn"
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => followUser(encodedToken, person._id)}
                  className="user-btn"
                >
                  Follow
                </button>
              )}
            </div>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
