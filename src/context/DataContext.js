import axios from "axios";
import toast from "react-hot-toast";
import { allPosts } from "../utils/postutils";
import { getAllUsers } from "../utils/userutils";
import { datareducer } from "../reducer/datareducer";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { AuthContext } from "./AuthContext";

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

  const [newPost, setNewPost] = useState({
    content: "",
    postImage: "",
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
      toast.success("Post liked ♥️", {
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
      toast.success("Post disliked 🙃", {
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
      toast.success("Post Deleted", {
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
      setUser(res.data.user);
      toast.success(`Following ${res.data.followUser.username}.`, {
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
      toast.error("Unfollowed.", {
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
      toast.success("Posed.", {
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

  const editPost = async (postData, postId, encodedToken) => {
    try {
      const res = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData },
        {
          headers: { authorization: encodedToken },
        }
      );
      dispatch({ type: "ALL_POSTS", payload: res.data.posts });
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

  useEffect(() => {
    getAllUsers(dispatch);
    allPosts(dispatch);
  }, []);

  const values = {
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
    createPost,
    editPost,
    recentPosts,
    setLatest,
    setTrending,
    newPost,
    setNewPost,
  };
  return (
    <>
      <DataContext.Provider value={values}> {children} </DataContext.Provider>
    </>
  );
};
