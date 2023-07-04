import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { EditPost } from "../feed/EditPost";

export const Bookmark = () => {
  const {
    initialState: { users },
    handleBookmark,
    removeFromBookmark,
    likePost,
    dislikePost,
    handleEdit,
    deletePost,
  } = useContext(DataContext);

  const { editModal, setEditModal } = useContext(AuthContext);

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
    <div>
      <div style={{ width: "43rem" }}>
        <div className="All-heading-div">
          <h3>Bookmark Posts</h3>
        </div>
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
                    {handleEdit(item.username) ? (
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
                    ) : null}
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

                  <span>{item.content} </span>

                  {item.postImage && (
                    <img
                      alt="post img"
                      className="explore-post-img"
                      src={item.postImage}
                    />
                  )}

                  <div className="explore-E">
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
    </div>
  );
};
