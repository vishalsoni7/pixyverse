import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import { getAllBookmark } from "../../utils/bookmark";

export const Bookmark = () => {
  const {
    initialState: { users },
    handleBookmark,
    removeFromBookmark,
    dispatch,
  } = useContext(DataContext);

  const encodedToken = localStorage.getItem("token");

  useEffect(() => {
    getAllBookmark(dispatch);
  }, []);

  const getuser = (clickedUserName) => {
    const filterUser = users.find(
      (user) => user.username.toLowerCase() === clickedUserName.toLowerCase()
    );
    return {
      pic: filterUser.profilePicture,
      name: filterUser.name,
      username: filterUser.username,
    };
  };

  return (
    <div>
      <div>
        <h2> Bookmarks </h2>
        {handleBookmark.map((item) => {
          return (
            <div className="explore-A" key={item._id}>
              <div className="explore-B">
                <div>
                  <img
                    className="explore-img"
                    src={getuser(item.username).pic}
                  />{" "}
                </div>
                <div className="explore-C">
                  <div className="explore-D">
                    <span> {getuser(item.username).name} </span>
                    <span className="explore-username"> @{item.username} </span>
                    <span> {item.createdAt} </span>
                    <span>...</span>
                  </div>

                  <div className="explore-E">
                    <span>{item.content} </span>
                    <div className="explore-F">
                      <i className="fa-regular fa-heart"></i>
                      <i className="fa-regular fa-comment"></i>
                      <i
                        onClick={() =>
                          removeFromBookmark(encodedToken, item._id)
                        }
                        className="fa-solid fa-bookmark"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
