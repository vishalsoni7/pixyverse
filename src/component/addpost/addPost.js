// import React, { useState } from "react";

import { useContext, useState } from "react";
import { DataContext } from "../../context/DataContext";
import "../addpost/addpost.css";

export const AddPost = () => {
  const { createPost, newPost, setNewPost, handleInput } =
    useContext(DataContext);

  const encodedToken = localStorage.getItem("token");

  return (
    <>
      <div className="add-post-div">
        <div>
          <input
            style={{ fontSize: "larger" }}
            className="add-post-input"
            placeholder="what's happning?"
            type="text"
          />{" "}
        </div>
        <div style={{ display: "flex", alignItems: "end" }}>
          <button onClick={() => createPost(encodedToken)}>Post</button>{" "}
        </div>
      </div>
    </>
  );
};

// const [selectedImage, setSelectedImage] = useState(null);

// const handleImageChange = (event) => {
//   const file = event.target.files[0];
//   setSelectedImage(URL.createObjectURL(file));
// };

{
  /* <div>
          {selectedImage && (
            <div>
              <img
                className="add-post-div-img"
                src={selectedImage}
                alt="Selected"
              />
            </div>
          )}
          <div>
            <input
              className="add-post-btn"
              id="file"
              type="file"
              onChange={handleImageChange}
              accept="image/*"
            />
            <label htmlFor="file">
              <i className="fa-regular fa-image fa-lg"></i>
            </label>
            <button> Post </button>
          </div>
        </div> */
}
