export const datareducer = (state, action) => {
  switch (action.type) {
    case "ALL-USERS":
      return { ...state, users: action.payload };
    case "ALL_POSTS":
      return { ...state, posts: action.payload };
    case "ALL-BOOKMARKS":
      return { ...state, bookmarks: action.payload };
    case "FOLLOW_USER":
      return { ...state, follow: action.payload };
    case "UNFOLLOW_USER":
      return { ...state, unfollow: action.payload };
  }
};
