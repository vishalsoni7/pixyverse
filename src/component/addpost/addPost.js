import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../addpost/addpost.css";

import axios from "axios";

import { HandleApiError, Post } from "../../ToastUtils";

export const AddPost = () => {
  const { dispatch } = useContext(DataContext);

  const [newPost, setNewPost] = useState({
    content: "",
    postImage: "",
  });

  const createPost = async (post, encodedToken) => {
    try {
      const res = await axios.post(
        "/api/posts",
        { postData: post },
        {
          headers: { authorization: encodedToken },
        }
      );
      setNewPost({ content: "", postImage: "" });
      dispatch({ type: "ALL_POSTS", payload: res.data.posts });
      Post();
    } catch (error) {
      console.error(error);
      HandleApiError();
    }
  };

  const encodedToken = localStorage.getItem("token");

  const handleInput = (e) => {
    setNewPost((newPost) => ({
      ...newPost,
      content: e.target.value,
    }));
  };

  const handleImg = (e) => {
    const files = e.target.files[0];
    setNewPost((newPost) => ({
      ...newPost,
      postImage: URL.createObjectURL(files),
    }));
  };

  const isDisabled =
    newPost.content.trim().length === 0 && newPost.postImage === "";

  return (
    <>
      <div className="add-post-div">
        <div>
          <textarea
            className="add-post-input"
            placeholder="what's happning?"
            type="text"
            name="content"
            value={newPost?.content}
            onChange={handleInput}
          >
            {" "}
          </textarea>
        </div>
        <>
          {newPost?.postImage && (
            <>
              <img
                className="add-post-img"
                src={newPost?.postImage}
                alt="new post"
              />
            </>
          )}
        </>
        <div className="post-input-div">
          <input id="file" type="file" onChange={handleImg} accept="image/*" />
          <label htmlFor="file">
            <i className="fa-regular fa-image fa-lg"></i>
          </label>{" "}
          <button
            disabled={isDisabled}
            className="add-post-btn"
            title={isDisabled ? "Add content" : "Post content"}
            onClick={() => createPost(newPost, encodedToken)}
          >
            Post
          </button>{" "}
        </div>
      </div>
    </>
  );
};
