import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

import { AvatarOptions } from "../../../AvatarOptions";

import "../avatar/avatar.css";
import { useState } from "react";

export const Avatar = () => {
  const { setUser, setAvatar } = useContext(AuthContext);

  const [isAvatar, setIsAvatar] = useState("");

  return (
    <div>
      <div className="avatars-div">
        {AvatarOptions.map((avatars, index) => (
          <div key={index}>
            {" "}
            <img
              onClick={() => setIsAvatar(() => avatars)}
              className="avatars-img"
              src={avatars}
              alt="user avatar"
            />{" "}
          </div>
        ))}
      </div>
      <button
        className="avatars-btn"
        onClick={(e) => {
          setUser((user) => ({
            ...user,
            profilePicture: isAvatar,
          }));
          setAvatar(false);
        }}
      >
        {" "}
        Set Avatar{" "}
      </button>
    </div>
  );
};
