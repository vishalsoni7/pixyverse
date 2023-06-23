import axios from "axios";
import { allPosts } from "../utils/postutils";
import { getAllUsers } from "../utils/userutils";
import { datareducer } from "../reducer/datareducer";
import { createContext, useEffect, useReducer, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [initialState, dispatch] = useReducer(datareducer, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  const encodedToken = localStorage.getItem("token");

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
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
    }
  };

  const deletePost = async (encodedToken, postId) => {
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });
      dispatch({ type: "ALL_POSTS", payload: res?.data?.posts });
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
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
    } catch (error) {
      console.error(error);
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
      dispatch({
        type: "FOLLOW_USER",
        payload: res?.data?.followUser,
      });
      console.log(res);
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

      console.log(res);
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
