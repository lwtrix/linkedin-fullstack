import React, { useEffect, useState } from "react";
import "./post-content.css";

export const PostContent = ({ post }) => {
  return (
    <div className="post-content">
      <div className="post-img-container">
        {post && post.image !== undefined ? (
          <img className="img" src={post.image} alt="" />
        ) : (
          <img
            className="img"
            src="https://media-exp1.licdn.com/dms/image/C4D22AQFfzNSU47XxmA/feedshare-shrink_2048_1536/0/1669800019262?e=1673481600&v=beta&t=ExdmnWiESORYduYc4Pci9UJfSxieMMP0UiTwrgj-_1Q"
            alt=""
          />
        )}
      </div>
    </div>
  );
};
