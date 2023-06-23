import React, { useState } from "react";

// import { createPost } from "../../utils/postutils";

import "../addpost/addpost.css";

export const AddPost = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  return (
    <div className="add-post-div">
      <div>
        <input
          className="add-post-input"
          placeholder="what's happning?"
          type="text"
        />{" "}
      </div>
      <div>
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
      </div>
    </div>
  );
};
