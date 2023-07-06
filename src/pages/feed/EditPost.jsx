import axios from "axios";
import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";

export const EditPost = ({ postId }) => {
  const {
    initialState: { posts },
    dispatch,
    setEditModal,
  } = useContext(DataContext);

  const [isEditPost, setIsEditPost] = useState({
    content: "",
    postImage: "",
  });

  const editPost = async (postId, postData, encodedToken, setEditModal) => {
    try {
      const res = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL_POSTS", payload: res.data.posts });
      // setIsEditPost({ content: "" });
      setEditModal(false);
    } catch (error) {
      console.error(error);
    }
  };

  const encodedToken = localStorage.getItem("token");

  const handleInput = (e) => {
    setIsEditPost({ ...isEditPost, content: e.target.value });
  };

  const post = posts.find(({ _id }) => _id === postId);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>
        <input
          type="text"
          value={post?.content}
          onChange={(e) => handleInput(e)}
          name="content"
          id="content"
        />
      </div>
      <div>
        <img
          alt="post-img"
          src={post?.postImage}
          style={{ height: "20rem", width: "30rem", borderRadius: "5px" }}
        />
      </div>
      <button
        onClick={() =>
          editPost(post._id, isEditPost, encodedToken, setEditModal)
        }
      >
        Save Changes
      </button>
    </div>
  );
};
