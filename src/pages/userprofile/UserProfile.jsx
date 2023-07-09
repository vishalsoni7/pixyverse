import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { AuthContext } from "../../context/AuthContext";
import { EditUser } from "./EditUser";
import { EditPost } from "../feed/EditPost";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLink,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import "../userprofile/userprofile.css";

export const UserProfile = () => {
  const {
    initialState: { posts, users },
    deletePost,
    likePost,
    dislikePost,
    inBookmark,
    addToBookmark,
    removeFromBookmark,
    handleEdit,
    editModal,
    setEditModal,
  } = useContext(DataContext);
  const { user, editUserModal, setEditUserModal } = useContext(AuthContext);

  const showMyPosts = posts.filter(
    ({ username }) => username === user?.username
  );

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

  const encodedToken = localStorage.getItem("token");

  return (
    <div style={{ width: "min-content" }}>
      <div className="userprofile-center-div">
        {" "}
        <div className="userprofile-center-div-A">
          <FontAwesomeIcon icon={faArrowLeft} size="lg" className="arrow" />

          <div className="userprofile-center-div-B">
            <p>
              {" "}
              {user?.name} {user?.firstName}
              {user?.lastName}
            </p>{" "}
            <span> {showMyPosts?.length} Posts </span>
          </div>
        </div>
        <div className="A">
          <div style={{ display: "flex" }}>
            <img
              src={user?.profilePicture}
              className="user-details-profile-picture"
              alt="current-user-img"
            />
          </div>

          <div className="B">
            <div className="C">
              <div className="D">
                <h2> {user?.name} </h2>
                <span> @{user?.username} </span>
              </div>
              <div>
                {" "}
                <button
                  onClick={() => setEditUserModal(true)}
                  className="userprofile-btn"
                >
                  Edit Profile
                </button>
              </div>
            </div>

            <div className="F">
              <p> {user?.bio} </p>
              <div className="E">
                <FontAwesomeIcon
                  icon={faLink}
                  style={{ paddingLeft: "1rem" }}
                />{" "}
                <a
                  className="user-details-bio"
                  target="_blank"
                  rel="noreferrer"
                  href={user?.link}
                >
                  {user?.link}
                </a>
              </div>
            </div>

            <div className="userprofile-about">
              <p> {user?.followers?.length} Followers </p>{" "}
              <p> {user?.following?.length} Following </p>
            </div>
          </div>
        </div>
      </div>

      {editUserModal && (
        <div
          onClick={() => setEditUserModal(false)}
          className="userprofile_modal_outer_div"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="userprofile_modal_outer_container"
          >
            <EditUser />
          </div>
        </div>
      )}

      <div>
        {showMyPosts.map((item) => {
          return (
            <div className="explore-A" key={item._id}>
              <div className="explore-B">
                <div>
                  <img
                    alt="profileimg"
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
  );
};
