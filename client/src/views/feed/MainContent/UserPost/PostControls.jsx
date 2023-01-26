import React from "react";
import "./post-controls.css";
import { FaThumbsUp, FaRegComment, FaShareAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

export const PostControls = () => {
  return (
    <div className="post-controls">
      <div className="control-container">
        <FaThumbsUp className="icon" />
        <span className="text">Like</span>
      </div>
      <div className="control-container">
        <FaRegComment className="icon" />
        <span className="text">Comment</span>
      </div>
      <div className="control-container">
        <FaShareAlt className="icon" />
        <span className="text">Repost</span>
      </div>
      <div className="control-container">
        <FiSend className="icon" />
        <span className="text">Send</span>
      </div>
    </div>
  );
};
