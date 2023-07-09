export const datareducer = (state, action) => {
  switch (action.type) {
    case "ALL-USERS":
      return { ...state, users: action.payload };
    case "ALL_POSTS":
      return { ...state, posts: action.payload };
    case "ALL-BOOKMARKS":
      return { ...state, bookmarks: action.payload };
    case "CREATE-NEW-USER":
      return {
        ...state,
        users: action.payload.map((user) =>
          user?.profilePicture
            ? user
            : {
                ...user,
                profilePicture:
                  '"https://res.cloudinary.com/dhmcuxpy5/image/upload/v1688799400/Mr__Knight_IOS_14_v4mjeb.jpg"',
              }
        ),
      };
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
