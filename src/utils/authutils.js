import axios from "axios";
import toast from "react-hot-toast";

export const userSignIn = async (signinDetails, navigate) => {
  try {
    const {
      status,
      data: { foundUser, encodedToken },
    } = await axios.post("/api/auth/login", signinDetails);
    if (status === 200) {
      localStorage.setItem("signInDetails", JSON.stringify(foundUser));
      localStorage.setItem("token", JSON.stringify(encodedToken));
      navigate("/home");
      toast.success(`Welcome ${signinDetails.username}.`, {
        style: {
          fontSize: "large",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  } catch (error) {
    console.error(error);
    toast.error("Incorrect username or password", {
      style: {
        fontSize: "large",
        padding: ".5rem",
        background: "#003153",
        color: "white",
        border: ".5px solid white",
      },
    });
  }
};

export const userSignUp = async (signupDetails, navigate) => {
  try {
    const {
      status,
      data: { createdUser, encodedToken },
    } = await axios.post("/api/auth/signup", signupDetails);
    if (status === 201) {
      localStorage.setItem("signUpDetails", JSON.stringify(createdUser));
      localStorage.setItem("token", JSON.stringify(encodedToken));
      //   setIsLoggedIn(true);
      navigate("/home");
      toast.success(`Welcome ${signupDetails.username}.`, {
        style: {
          fontSize: "medium",
          padding: ".5rem",
          background: "#003153",
          color: "white",
          border: ".5px solid white",
        },
      });
    }
  } catch (error) {
    console.error(error);
    toast.error("Incorrect username or password", {
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

export const signOut = (navigate) => {
  localStorage.removeItem("token");
  localStorage.removeItem("signInDetails");
  localStorage.removeItem("signUpDetails");
  localStorage.removeItem("guestUser");
  navigate("/signin");
  toast.error("Signed Out", {
    style: {
      fontSize: "medium",
      padding: ".5rem",
      background: "#003153",
      color: "white",
      border: ".5px solid white",
    },
  });
};
