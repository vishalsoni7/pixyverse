export const datareducer = (state, action) => {
  switch (action.type) {
    case "ALL-USERS":
      return { ...state, users: action.payload };
    case "ALL_POSTS":
      return { ...state, posts: action.payload };
    case "ALL-BOOKMARKS":
      return { ...state, bookmark: action.payload };
  }
};
