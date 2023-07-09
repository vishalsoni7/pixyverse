export const authReducer = (authState, action) => {
  switch (action.type) {
    case "":
      return { ...authState, isSignIn: action.payload };
    case "USER_SIGNIN":
      return { ...authState, signInDetails: action.payload };
    case "USER_SIGNUP":
      return { ...authState, signUpDetails: action.payload };

    default: {
      return authState;
    }
  }
};
