import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { DataContext } from "../../context/DataContext";

export const EditPost = ({ editPosts }) => {
  const { editpost, recentPosts, newPost, setNewPost } =
    useContext(DataContext);
  const { user, setUser, setEditModal } = useContext(AuthContext);

  const encodedToken = localStorage.getItem("token");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setNewPost((newPost) => ({ ...newPost, [name]: value }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <div>
        <input
          type="text"
          value={recentPosts?.content}
          onChange={handleInput}
          name="content"
          id="content"
        />
      </div>
      <div>
        <img
          src={recentPosts?.postImage}
          style={{ height: "20rem", width: "30rem", borderRadius: "5px" }}
        />
      </div>
      <button> Save Changes </button>
    </div>
  );
};
