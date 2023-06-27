import axios from "axios";
import toast from "react-hot-toast";
import { allPosts } from "../utils/postutils";
import { getAllUsers } from "../utils/userutils";
import { datareducer } from "../reducer/datareducer";
import { createContext, useEffect, useReducer } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [initialState, dispatch] = useReducer(datareducer, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  const likePost = async (encodedToken, postId) => {
    try {
      const res = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL_POSTS", payload: res.data.posts });
      toast.success("Post liked. ♥️", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const dislikePost = async (encodedToken, postId) => {
    try {
      const res = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL_POSTS", payload: res.data.posts });
      toast.success("Post disliked. 🙃", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const deletePost = async (encodedToken, postId) => {
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });
      dispatch({ type: "ALL_POSTS", payload: res?.data?.posts });
      toast.success("Post deleted.", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const addToBookmark = async (encodedToken, postId) => {
    try {
      const res = await axios.post(
        `/api/users/bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL-BOOKMARKS", payload: res?.data?.bookmarks });
      toast.success("Bookmarked.", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const removeFromBookmark = async (encodedToken, postId) => {
    try {
      const res = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL-BOOKMARKS", payload: res?.data?.bookmarks });
      toast.error("Removed from bookmark.", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!", {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  };

  const followUser = async (encodedToken, followUserId) => {
    try {
      const res = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const unfollowUser = async (encodedToken, followUserId) => {
    try {
      const res = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );
      return res;
    } catch (error) {
      console.error(error);
    }
  };

  const handleBookmark = initialState.posts.filter((item) =>
    initialState.bookmarks.includes(item._id)
  );

  const inBookmark = (postId) => {
    return handleBookmark.find((item) => item._id === postId);
  };

  useEffect(() => {
    getAllUsers(dispatch);
    allPosts(dispatch);
  }, []);

  const values = {
    initialState,
    dispatch,
    handleBookmark,
    inBookmark,
    addToBookmark,
    removeFromBookmark,
    deletePost,
    likePost,
    dislikePost,
    followUser,
    unfollowUser,
  };
  return (
    <>
      <DataContext.Provider value={values}> {children} </DataContext.Provider>
    </>
  );
};
