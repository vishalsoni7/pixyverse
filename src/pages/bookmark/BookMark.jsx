import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

import { SideBar } from "../sidebar/SideBar";
import { Users } from "../users/Users";

export const Bookmark = () => {
  const {
    initialState: { users },
    handleBookmark,
    removeFromBookmark,
    dispatch,
  } = useContext(DataContext);

  const encodedToken = localStorage.getItem("token");

  const getuser = (clickedUserName) => {
    const filterUser = users.find(
      (user) => user.username.toLowerCase() === clickedUserName.toLowerCase()
    );
    return {
      pic: filterUser.profilePicture,
      name: filterUser.name,
      username: filterUser.username,
    };
  };

  return (
    <div
      style={{
        display: "-webkit-inline-flex",
        gap: "2rem",
        flexWrap: "wrap",
      }}
    >
      <SideBar />
      <div style={{ width: "43rem" }}>
        <div style={{}}> </div>
        <h3 style={{ textAlign: "left", lineHeight: 0, background: "red" }}>
          {" "}
          Bookmark Posts{" "}
        </h3>{" "}
        {handleBookmark.map((item) => {
          return (
            <div className="explore-A" key={item._id}>
              <div className="explore-B">
                <div>
                  <img
                    className="explore-img"
                    src={getuser(item.username).pic}
                  />{" "}
                </div>
                <div className="explore-C">
                  <div className="explore-D">
                    <span> {getuser(item.username).name} </span>
                    <span className="explore-username"> @{item.username} </span>
                    <span> {item.createdAt} </span>
                    <span>...</span>
                  </div>

                  <div className="explore-E">
                    <span>{item.content} </span>
                    <div className="explore-F">
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-regular fa-comment"></i>
                      <i
                        onClick={() =>
                          removeFromBookmark(encodedToken, item._id)
                        }
                        className="fa-solid fa-bookmark"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Users />
    </div>
  );
};
