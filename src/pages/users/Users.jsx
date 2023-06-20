import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../users/user.css";

export const Users = () => {
  const {
    initialState: { users },
  } = useContext(DataContext);

  return (
    <div className="user-main-div">
      <div className="user-search-div">
        <span className="search-icon">
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />{" "}
        </span>
        <input placeholder="Search Pixyverse" />{" "}
      </div>

      <div className="user-div-A">
        <h2> Who to follow </h2>
        {users.map((person) => (
          <div className="user-div-B">
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
              <button className="user-btn"> Follow </button>
            </div>{" "}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
