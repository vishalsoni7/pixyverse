import axios from "axios";

export const getAllUsers = async (dispatch, encodedToken) => {
  try {
    const res = await axios.get("/api/users");
    dispatch({ type: "ALL-USERS", payload: res.data.users });
  } catch (error) {
    console.error(error);
  }
};
