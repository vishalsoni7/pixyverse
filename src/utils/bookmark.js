// import axios from "axios";

// const encodedToken = localStorage.getItem("token");

// const getAllBookmark = async (dispatch) => {
//   try {
//     const res = await axios.get("/api/users/bookmark/", {
//       headers: { authorization: encodedToken },
//     });
//     dispatch({ type: "ALL-BOOKMARKS", payload: res.data.bookmarks });
//   } catch (error) {
//     console.error(error);
//   }
// };

// const addToBookmark = async (encodedToken, postId, dispatch) => {
//   try {
//     const res = await axios.post(
//       `/api/users/bookmark/${postId}`,
//       {},
//       {
//         headers: { authorization: encodedToken },
//       }
//     );
//     dispatch({ type: "ALL-BOOKMARKS", payload: res.data.bookmarks });
//   } catch (error) {
//     console.error(error);
//   }
// };

// const removeFromBookmark = async (postId) => {
//   try {
//     const res = await axios.delete(`/api/users/remove-bookmark/${postId}`, {
//       headers: { authorization: encodedToken },
//     });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export { getAllBookmark, addToBookmark, removeFromBookmark };
