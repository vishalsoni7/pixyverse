import axios from "axios";

export const allPosts = async (dispatch) => {
  try {
    const res = await axios.get("/api/posts");
    dispatch({ type: "ALL_POSTS", payload: res.data.posts });
  } catch (error) {
    console.error(error);
  }
};
