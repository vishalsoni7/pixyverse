import { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";

import { getAllBookmark } from "../../utils/bookmark";

export const Bookmark = () => {
  const { initialState, dispatch } = useContext(DataContext);

  useEffect(() => {
    console.log(initialState.bookmarks);
    getAllBookmark(dispatch);
  }, []);

  return (
    <div>
      <h2> Bookmark </h2>
    </div>
  );
};
