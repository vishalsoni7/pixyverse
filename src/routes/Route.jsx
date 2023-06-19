import { Route, Routes } from "react-router-dom";

import { Landing } from "../pages/landing/Landing";
import { Signin } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";
import { Feed } from "../pages/feed/Feed";
import { Explore } from "../pages/explore/Explore";
import { Bookmark } from "../pages/bookmark/Bookemark";

export const AppRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/home" element={<Feed />} />
        <Route path="/bookmark" element={<Bookmark />} />
      </Routes>
    </div>
  );
};
