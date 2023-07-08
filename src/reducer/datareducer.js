export const datareducer = (state, action) => {
  switch (action.type) {
    case "ALL-USERS":
      return { ...state, users: action.payload };
    case "ALL_POSTS":
      return { ...state, posts: action.payload };
    case "ALL-BOOKMARKS":
      return { ...state, bookmarks: action.payload };
    case "UPDATE-USER-IN-USERS":
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.username === action.payload.username) {
            return (user = action.payload);
          }
          return user;
        }),
      };
  }
};
