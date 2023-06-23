import axios from "axios";

const encodedToken = localStorage.getItem("token");

export const allPosts = async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({ type: "ALL_POSTS", payload: res.data.posts });
  } catch (error) {
    console.error(error);
  }
};

export const createPost = async () => {
  try {
    const res = await axios.post("/api/posts", {
      headers: { authorization: encodedToken },
    });
    console.log(res);
  } catch (error) {
    console.error(error);
  }
};

export const singlePost = async (postId) => {
  try {
    const res = await axios.get(`/api/posts/${postId}`);
  } catch (error) {
    console.error(error);
  }
};

export const editPost = async () => {
  try {
    const res = await axios.post();
  } catch (error) {
    console.error(error);
  }
};

// export const deletePost = async (dispatch, encodedToken, postId) => {
//   try {
//     const res = await axios.delete(`/api/posts/${postId}`, {
//       headers: { authorization: encodedToken },
//     });
//     dispatch({ type: "ALL_POSTS", payload: res.data.posts });
//   } catch (error) {
//     console.error(error);
//   }
// };
