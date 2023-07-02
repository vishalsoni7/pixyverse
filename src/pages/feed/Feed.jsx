import "../feed/feed.css";

import { Users } from "../users/Users";
import { SideBar } from "../sidebar/SideBar";
import { AddPost } from "../../component/addpost/addPost";

import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import "../explore/explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import { EditPost } from "./EditPost";

export const Feed = () => {
  const {
    initialState: { users },
    inBookmark,
    addToBookmark,
    removeFromBookmark,
    deletePost,
    likePost,
    dislikePost,
    recentPosts,
    trending,
    latest,
    setLatest,
    setTrending,
  } = useContext(DataContext);
  const { user, editModal, setEditModal } = useContext(AuthContext);

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

  const handleTrending = () => {
    setTrending((pre) => !pre);
  };

  const handleLatest = () => {
    setLatest((pre) => !pre);
  };

  const showPost = recentPosts.map((item) => item.postImage.length > 0);

  console.log(recentPosts.some((item) => item.postImage.length === 0));

  return (
    <>
      <div className="feed-parent-div">
        <SideBar />

        <div>
          <AddPost />
          <div className="sort-parent">
            <p onClick={handleTrending}>
              {" "}
              {trending ? "Remove Filter" : "Filter Trending"}{" "}
            </p>
            <p>|</p>
            <p onClick={handleLatest}>
              {" "}
              {latest ? "Remove Filter" : "Show Latest"}{" "}
            </p>
          </div>
          <div style={{ width: "42rem" }}>
            {recentPosts.map((item) => {
              return (
                <div className="explore-A" key={item._id}>
                  <div className="explore-B">
                    <div>
                      <img
                        alt="profileimg"
                        className="explore-img"
                        src={getuser(item.username).pic}
                      />{" "}
                    </div>
                    <div className="explore-C">
                      <div className="explore-D">
                        <span> {getuser(item.username).name} </span>
                        <span className="explore-username">
                          {" "}
                          @{item.username}{" "}
                        </span>
                        <span> {item.createdAt} </span>
                        <span>
                          <i
                            onClick={() => setEditModal(true)}
                            className="fa-regular fa-pen-to-square"
                          ></i>

                          <FontAwesomeIcon
                            onClick={() => deletePost(encodedToken, item._id)}
                            icon={faTrash}
                          />
                        </span>
                      </div>

                      {editModal && (
                        <div
                          onClick={() => setEditModal(false)}
                          className="post-edit_modal_outer_div"
                        >
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className="post-edit_modal_outer_container"
                          >
                            <EditPost editPosts={true} />
                          </div>
                        </div>
                      )}

                      <div className="explore-E">
                        <span>{item.content} </span>

                        {showPost && (
                          <img
                            alt="post img"
                            className="explore-post-img"
                            src={item.postImage}
                          />
                        )}

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

                          <i
                            title="comment"
                            className="fa-regular fa-comment"
                          ></i>

                          {!inBookmark(item._id) ? (
                            <i
                              title="add to bookmark"
                              onClick={() =>
                                addToBookmark(encodedToken, item._id)
                              }
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
        <Users />
      </div>
    </>
  );
};
