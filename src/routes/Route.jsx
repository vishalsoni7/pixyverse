import { Route, Routes } from "react-router-dom";

import { Landing } from "../pages/landing/Landing";
import { Signin } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";
import { Feed } from "../pages/feed/Feed";
import { Explore } from "../pages/explore/Explore";
import { Bookmark } from "../pages/bookmark/BookMark";
import { UserProfile } from "../pages/userprofile/UserProfile";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const AppRouts = () => {
  const { isSignIn } = useContext(AuthContext);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />

        <Route path="/home" element={<Feed />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </div>
  );
};
