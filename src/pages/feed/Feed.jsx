import "../feed/feed.css";

import { Users } from "../users/Users";
// import { Explore } from "../explore/Explore";
import { SideBar } from "../sidebar/SideBar";
import { AddPost } from "../../component/addpost/addPost";
import { Sort } from "../../component/sort/sort";

export const Feed = () => {
  return (
    <>
      <div className="feed-parent-div">
        <SideBar />

        <div>
          <AddPost />
          <Sort />
          {/* <Explore /> */}
        </div>

        <Users />
      </div>
    </>
  );
};
