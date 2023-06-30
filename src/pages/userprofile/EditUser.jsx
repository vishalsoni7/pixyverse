import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import "./edituser.css";

export const EditUser = ({ edit }) => {
  const { user, setUser, setEditModal, editUser } = useContext(AuthContext);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const encodedToken = localStorage.getItem("token");

  return (
    <div>
      <div>
        <img
          alt="profile picture"
          src={user?.profilePicture}
          className="edit-img"
          id="file"
        />
      </div>
      <h3 htmlFor="file">Set Avtar</h3>

      <div>
        {" "}
        <div className="edit-inner-div">
          <h3> Name </h3>
          <input
            placeholder="Name"
            type="text"
            value={user?.name}
            onChange={handleInput}
            name="name"
            id="name"
          />
        </div>
        <div className="edit-inner-div">
          <h3> Bio </h3>
          <input
            placeholder="Bio"
            type="text"
            value={user?.bio}
            onChange={handleInput}
            name="bio"
            id="bio"
          />
        </div>
        <div className="edit-inner-div">
          <h3> Url </h3>
          <input
            placeholder="Link"
            type="url"
            value={user?.link}
            onChange={handleInput}
            name="link"
            id="link"
          />
        </div>{" "}
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          editUser(user, encodedToken, setEditModal);
        }}
        className="edit-user-btn"
      >
        {" "}
        Save Changes{" "}
      </button>
    </div>
  );
};
