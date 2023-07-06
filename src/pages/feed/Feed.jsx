import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { AddPost } from "../../component/addpost/addPost";
import { EditPost } from "./EditPost";

import "../feed/feed.css";
import "../explore/explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    handleEdit,
    editModal,
    setEditModal,
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

  const handleTrending = () => {
    setTrending((pre) => !pre);
  };

  const handleLatest = () => {
    setLatest((pre) => !pre);
  };

  return (
    <>
      {" "}
      <div className="All-heading-div">
        <h3>Home</h3>
      </div>
      <div className="feed-parent-div">
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
          <div>
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
                        <div className="explore-H">
                          <span> {getuser(item.username).name} </span>{" "}
                          <span className="explore-username">
                            {" "}
                            @{item.username}{" "}
                          </span>
                          <span> {item.createdAt} </span>
                        </div>

                        {handleEdit(item.username) && (
                          <span>
                            <i
                              onClick={() =>
                                setEditModal({
                                  modalState: true,
                                  postId: item._id,
                                })
                              }
                              className="explore-G fa-regular fa-pen-to-square"
                            ></i>

                            <FontAwesomeIcon
                              onClick={() => deletePost(encodedToken, item._id)}
                              icon={faTrash}
                            />
                          </span>
                        )}
                      </div>

                      <div style={{ textAlign: "left" }}>
                        {" "}
                        <span>{item.content} </span>
                      </div>

                      {item.postImage && (
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

                        <i
                          title={
                            !inBookmark(item._id)
                              ? "add to bookmark"
                              : "remove from bookmark"
                          }
                          onClick={() =>
                            !inBookmark(item._id)
                              ? addToBookmark(encodedToken, item._id)
                              : removeFromBookmark(encodedToken, item._id)
                          }
                          className={
                            !inBookmark(item._id)
                              ? "fa-regular fa-bookmark"
                              : "fa-solid fa-bookmark"
                          }
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {editModal.modalState && (
            <div
              onClick={() => setEditModal({ modalState: false, postId: "" })}
              className="post-edit_modal_outer_div"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="post-edit_modal_outer_container"
              >
                <EditPost postId={editModal.postId} />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
