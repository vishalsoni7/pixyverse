import { Route, Routes } from "react-router-dom";

import { RequireAuth } from "../utils/RequireAuth";
import { Landing } from "../pages/landing/Landing";
import { Feed } from "../pages/feed/Feed";
import { Explore } from "../pages/explore/Explore";
import { Bookmark } from "../pages/bookmark/BookMark";
import { UserProfile } from "../pages/userprofile/UserProfile";
import { SignIn } from "../pages/signin/SignIn";
import { SignUp } from "../pages/signup/SignUp";

export const AppRouts = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              {" "}
              <Explore />{" "}
            </RequireAuth>
          }
        />
        <Route
          path="/home"
          element={
            <RequireAuth>
              <Feed />
            </RequireAuth>
          }
        />

        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <Bookmark />
            </RequireAuth>
          }
        />
        <Route
          path="/userprofile"
          element={
            <RequireAuth>
              <UserProfile />{" "}
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};
