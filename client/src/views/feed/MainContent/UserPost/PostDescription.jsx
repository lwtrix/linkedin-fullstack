import React from "react";
import "./post-description.css";

export const PostDescription = ({ post }) => {
  return (
    <div className="post-description">
      {post && (
        <p className="text">
          {post.text !== ""
            ? post.text
            : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est repellat esse numquam natus quisquam non impedit magnam, architecto accusamus eius iste molestiae cum omnis ut nobis amet odio a deserunt?"}
        </p>
      )}
    </div>
  );
};
