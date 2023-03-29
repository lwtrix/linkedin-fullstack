import React from "react";
import "./post-stats.css";
import { FaThumbsUp } from "react-icons/fa";

export const PostStats = () => {
  const randomLikesNum = Math.floor(Math.random() * 3000);
  const randomCommsNum = Math.floor(Math.random() * 500);

  return (
    <div className="post-stats">
      <div className="likes-container">
        <div className="icon-container">
          <FaThumbsUp className="icon" />
        </div>
        <span className="likes-count">
          {randomLikesNum > 999
            ? `${randomLikesNum.toString()[0]}k`
            : randomLikesNum}
        </span>
      </div>
      <div className="comments-container">
        <span className="text">{randomCommsNum} comments</span>
      </div>
    </div>
  );
};
