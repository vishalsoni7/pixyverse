import axios from "axios";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { allPosts } from "../utils/postutils";
import { getAllUsers } from "../utils/userutils";
import { datareducer } from "../reducer/datareducer";

import { AuthContext } from "./AuthContext";

import {
  LikePost,
  DisLikePost,
  HandleApiError,
  DeletePost,
  AddInBookmark,
  RemoveBookmark,
  FollowUser,
  UnFollowUser,
  UpdateUser,
} from "../ToastUtils";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [initialState, dispatch] = useReducer(datareducer, {
    posts: [],
    users: [],
    bookmarks: [],
  });

  const { user, setUser } = useContext(AuthContext);

  const [trending, setTrending] = useState(false);
  const [latest, setLatest] = useState(false);

  const [editModal, setEditModal] = useState({
    modalState: false,
    postId: "",
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
      LikePost();
    } catch (error) {
      console.error(error);
      HandleApiError();
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
      DisLikePost();
    } catch (error) {
      console.error(error);
      HandleApiError();
    }
  };

  const deletePost = async (encodedToken, postId) => {
    try {
      const res = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: encodedToken },
      });
      dispatch({ type: "ALL_POSTS", payload: res?.data?.posts });
      DeletePost();
    } catch (error) {
      console.error(error);
      HandleApiError();
    }
  };

  const allBookmark = async (encodedToken) => {
    try {
      const res = await axios.get("/api/users/bookmark/", {
        headers: { authorization: encodedToken },
      });
      dispatch({ type: "ALL-BOOKMARKS", payload: res?.data?.bookmarks });
    } catch (error) {
      console.log(error);
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
      AddInBookmark();
    } catch (error) {
      console.error(error);
      HandleApiError();
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
      RemoveBookmark();
    } catch (error) {
      console.error(error);
      HandleApiError();
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
      setUser(res.data.user);
      FollowUser();
    } catch (error) {
      console.error(error);
      HandleApiError();
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
      setUser(res.data.user);
      UnFollowUser();
    } catch (error) {
      console.error(error);
      HandleApiError();
    }
  };

  // const UpadateUserInUsers = (UpdatedUser) => {
  //   const currentUser = UpdatedUser;
  //   dispatch({ type: "UPDATE-USER-IN-USERS", payload: UpdatedUser });
  // };

  const editUser = async (userData, encodedToken, setEditUserModal) => {
    try {
      const res = await axios.post(
        "/api/users/edit",
        { userData },
        {
          headers: { authorization: encodedToken },
        }
      );
      if (res.status === 201) {
        setUser(res.data.user);
        dispatch({ type: "UPDATE-USER-IN-USERS", payload: res.data.user });
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setEditUserModal(false);
        UpdateUser(res.data.user);
      }
    } catch (error) {
      console.error(error);
      HandleApiError();
    }
  };

  const handleBookmark = initialState.posts.filter((item) =>
    initialState.bookmarks.includes(item._id)
  );

  const inBookmark = (postId) => {
    return handleBookmark.find((item) => item._id === postId);
  };

  const { posts } = initialState;

  const showFeedPost = posts?.filter(
    (item) =>
      item?.username === user?.username ||
      user?.following?.some(
        (followingItem) => followingItem?.username === item?.username
      )
  );

  const trendingPost = trending
    ? showFeedPost.sort((a, b) => b.likes.likeCount - a.likes.likeCount)
    : showFeedPost;

  const recentPosts = latest
    ? trendingPost.sort(
        (a, b) => Date.parse(a.createdAt) - Date.parse(b.createdAt)
      )
    : trendingPost;

  const handleEdit = (userName) => userName === user.username;

  useEffect(() => {
    getAllUsers(dispatch);
    allPosts(dispatch);
  }, []);

  const values = {
    handleEdit,
    initialState,
    dispatch,
    handleBookmark,
    inBookmark,
    allBookmark,
    addToBookmark,
    removeFromBookmark,
    deletePost,
    likePost,
    dislikePost,
    followUser,
    unfollowUser,
    recentPosts,
    setLatest,
    setTrending,
    editModal,
    setEditModal,
    editUser,
  };
  return (
    <>
      <DataContext.Provider value={values}> {children} </DataContext.Provider>
    </>
  );
};
