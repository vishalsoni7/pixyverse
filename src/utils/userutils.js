import axios from "axios";

const encodedToken = localStorage.getItem("token");

const getAllUsers = async (dispatch) => {
  try {
    const res = await axios.get("/api/users");
    dispatch({ type: "ALL-USERS", payload: res.data.users });
  } catch (error) {
    console.error(error);
  }
};

const editUser = async () => {
  try {
    const res = await axios.post("/api/users/edit", {
      headers: { authorization: encodedToken },
    });
  } catch (error) {
    console.error(error);
  }
};

const followUser = async (followUserId) => {
  try {
    const res = await axios.post(
      `/api/users/follow/${followUserId}`,
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

const unfollowUser = async (followUserId) => {
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

export { getAllUsers, editUser, followUser, unfollowUser };
