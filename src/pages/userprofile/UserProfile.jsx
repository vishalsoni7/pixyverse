import { SideBar } from "../sidebar/SideBar";
import { Users } from "../users/Users";

import "../userprofile/userprofile.css";

import { useContext } from "react";
import { DataContext } from "../../context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faLink,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthContext";
import { EditUser } from "./EditUser";

export const UserProfile = () => {
  const {
    initialState: { posts, users },
    deletePost,
    likePost,
    dislikePost,
    inBookmark,
    addToBookmark,
    removeFromBookmark,
  } = useContext(DataContext);
  const { user, editModal, setEditModal } = useContext(AuthContext);

  const showMyPosts = posts.filter(
    ({ username }) => username === user?.username
  );

  const getuser = (clickedUserName) => {
    const filterUser = users?.find(
      (user) => user?.username.toLowerCase() === clickedUserName.toLowerCase()
    );
    return {
      pic: filterUser?.profilePicture,
      name: filterUser?.name,
      username: filterUser?.username,
    };
  };

  const encodedToken = localStorage.getItem("token");

  return (
    <div className="userprofile-parent-div">
      <SideBar />
      <div>
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
            <div>
              <img
                src={user?.profilePicture}
                className="user-details-profile-picture"
                alt="current-user-picture"
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
                    onClick={() => setEditModal(true)}
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

        {editModal && (
          <div
            onClick={() => setEditModal(false)}
            className="userprofile_modal_outer_div"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="userprofile_modal_outer_container"
            >
              <EditUser edit={true} />
            </div>
          </div>
        )}

        <div>
          {showMyPosts.map((item) => {
            return (
              <div key={item._id} className="user-details-post-parent-div">
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <div className="post-profile">
                    <img
                      className="user-profile-img"
                      src={getuser(item.username).pic}
                    />
                  </div>
                </div>
                <div>
                  <div className="user-profile-post-about-user">
                    <div className="user-profile-post-about-user-A">
                      <span> {getuser(item.username).name} </span>{" "}
                      <span> @{item.username} </span>
                    </div>
                    <span> {item.createdAt} </span>

                    <div className="user-profile-post-about-user-B">
                      <span>
                        <i className="fa-regular fa-pen-to-square"></i>
                      </span>
                      <span>
                        <FontAwesomeIcon
                          onClick={() => deletePost(encodedToken, item._id)}
                          icon={faTrash}
                        />
                      </span>{" "}
                    </div>
                  </div>

                  <div className="user-profile-content">
                    <span>{item.content} </span>{" "}
                  </div>

                  <div className="user-profile-post-img-div">
                    {" "}
                    <img
                      className="user-profile-post-img"
                      src={item.postImage}
                    />{" "}
                  </div>

                  <div className="user-profile-post-icon">
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
                      <span>{item.likes.likeCount}</span>
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
            );
          })}
        </div>
      </div>
      <Users />
    </div>
  );
};
