import toast from "react-hot-toast";

export const HandleApiError = () =>
  toast.error("Something went wrong!", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const FillDetails = () =>
  toast.error("Please fill details!", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const PasswordNotMached = () =>
  toast.error("Password does not matched", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const SignInUserName = (foundUser) =>
  toast.success(`Welcome ${foundUser.username}`, {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const IncorrectPswrdandUserName = () =>
  toast.error("Incorrect username or password", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const SignOutToast = () =>
  toast.error("Signed Out", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const UpdateUser = (user) =>
  toast.success(`${user.username} profile updated`, {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const LikePost = () =>
  toast.success("Liked", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const DisLikePost = () =>
  toast.error("Disliked", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const DeletePost = () =>
  toast.error("Deleted", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const AddInBookmark = () =>
  toast.success("Bookmarked", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const RemoveBookmark = () =>
  toast.error("Removed from bookmark", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const FollowUser = () =>
  toast.success("Following", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const UnFollowUser = () =>
  toast.error("Unfollowed", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const Post = () =>
  toast.success("Posted", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const AvatarUpdate = () =>
  toast.success("Avatar Updated", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });

export const AvatarAlert = () =>
  toast.error("No avatar selected!", {
    style: {
      padding: ".5rem",
      background: "#252525",
      color: "whitesmoke",
    },
  });
