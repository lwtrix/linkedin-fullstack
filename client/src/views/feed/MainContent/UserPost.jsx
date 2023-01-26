import React, { useState, useEffect } from "react";
import "./user-post.css";
import { PostContent } from "./UserPost/PostContent";
import { PostControls } from "./UserPost/PostControls";
import { PostDescription } from "./UserPost/PostDescription";
import { PostStats } from "./UserPost/PostStats";
import { UserInfo } from "./UserPost/UserInfo";

const UserPost = ({ post }) => {
  const [postData, setPostData] = useState(null);
  const [userData, setUserData] = useState(null);

  const getLatestPostUser = async (userId) => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };

    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${userId}`,
      options
    );
    const data = await res.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    if (typeof post.user === "string") {
      getLatestPostUser(post.user);
    } else {
      setUserData(post.user);
    }

    setPostData(post);
  }, [post]);

  return (
    <div className="user-post">
      <UserInfo user={userData} />
      <PostDescription post={postData} />
      <PostContent post={postData} />
      <PostStats post={postData} />
      <PostControls post={postData} />
    </div>
  );
};

export default UserPost;
