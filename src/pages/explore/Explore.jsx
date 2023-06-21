import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

import "../explore/explore.css";

export const Explore = () => {
  const {
    initialState: { posts, users },
    inBookmark,
    addToBookmark,
    removeFromBookmark,
  } = useContext(DataContext);

  const { encodedToken } = useContext(AuthContext);

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
                      <i title="like" className="fa-regular fa-heart"></i>
                      <i title="comment" className="fa-regular fa-comment"></i>

                      {!inBookmark(item._id) ? (
                        <i
                          title="add to bookmark"
                          onClick={() => addToBookmark(encodedToken, item._id)}
                          className="fa-regular fa-bookmark"
                        ></i>
                      ) : (
                        <i
                          title="remove from bookmark"
                          onClick={() =>
                            removeFromBookmark(encodedToken, item._id)
                          }
                          className="fa-solid fa-bookmark"
                        ></i>
                      )}
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

// <i className="fa-solid fa-bookmark"></i>

// <i class="fa-solid fa-heart"></i>
// <i class="fa-solid fa-bookmark"></i>
