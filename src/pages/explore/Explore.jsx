import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import "../explore/explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AddPost } from "../../component/addpost/addPost";
import { Sort } from "../../component/sort/sort";

export const Explore = () => {
  const {
    initialState: { posts, users },
    inBookmark,
    addToBookmark,
    removeFromBookmark,
    deletePost,
    likePost,
    dislikePost,
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
    <div className="explore-parent-div">
      <div>
        <AddPost />
        <Sort />
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
                    <span>
                      <i className="fa-regular fa-pen-to-square"></i>
                      <FontAwesomeIcon
                        onClick={() => deletePost(encodedToken, item._id)}
                        icon={faTrash}
                      />
                    </span>
                  </div>

                  <div className="explore-E">
                    <span>{item.content} </span>

                    <img className="explore-post-img" src={item.postImage} />

                    <div className="explore-F">
                      <i
                        onClick={() =>
                          item.likes.likedBy.length === 0
                            ? likePost(encodedToken, item._id)
                            : dislikePost(encodedToken, item._id)
                        }
                        title="like"
                        className={
                          item.likes.likedBy.length === 0
                            ? "fa-regular fa-heart"
                            : "fa-solid fa-heart"
                        }
                      >
                        {" "}
                        <span style={{ fontSize: "small" }}>
                          {item.likes.likeCount}
                        </span>
                      </i>

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

//<i className="fa-solid fa-bookmark"></i>

// <i class="fa-solid fa-heart"></i>
// <i class="fa-solid fa-bookmark"></i>
