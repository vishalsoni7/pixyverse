import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import "../explore/explore.css";

export const Explore = () => {
  const {
    initialState: { posts, users },
  } = useContext(DataContext);

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
    <div className="explore-parent-div">
      <div>
        {posts.map((item) => {
          return (
            <div className="explore-A" key={item.id}>
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
                      <i class="fa-regular fa-heart"></i>
                      <i class="fa-regular fa-comment"></i>
                      <i class="fa-regular fa-bookmark"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// <i class="fa-solid fa-heart"></i>
// <i class="fa-solid fa-bookmark"></i>
