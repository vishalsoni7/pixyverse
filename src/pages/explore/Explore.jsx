import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import "../explore/explore.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { EditPost } from "../feed/EditPost";
import { AuthContext } from "../../context/AuthContext";

export const Explore = () => {
  const {
    initialState: { posts, users },
    inBookmark,
    addToBookmark,
    removeFromBookmark,
    deletePost,
    likePost,
    dislikePost,
    handleEdit,
    editModal,
    setEditModal,
  } = useContext(DataContext);
  const { user } = useContext(AuthContext);

  const encodedToken = localStorage.getItem("token");

  const getuser = (clickedUserName) => {
    const filterUser = users.find(
      (user) => user.username.toLowerCase() === clickedUserName.toLowerCase()
    );
    if (filterUser) {
      return filterUser;
    } else {
      return user;
    }
  };

  return (
    <div>
      <div className="All-heading-div">
        <h3>Explore Pixyverse</h3>
      </div>
      <div className="explore-parent-div">
        <div>
          {posts.map((item) => {
            return (
              <div className="explore-A" key={item._id}>
                <div className="explore-B">
                  <div>
                    <img
                      alt="profile img"
                      className="explore-img"
                      src={getuser(item.username)?.profilePicture}
                    />{" "}
                  </div>
                  <div className="explore-C">
                    <div className="explore-D">
                      <div className="explore-H">
                        <span> {getuser(item.username).name} </span>{" "}
                        <span className="explore-username">
                          {" "}
                          @{item.username}
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

                      <i title="comment" className="fa-regular fa-comment"></i>

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
  );
};
