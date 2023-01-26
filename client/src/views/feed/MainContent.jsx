import React, { useState, useEffect } from "react";
import "./main-content.css";
import { ProfileInfo } from "./LeftSideBar/ProfileInfo";
import JobSearch from "./MainContent/JobSearch";
import { ProfileTop } from "./MainContent/ProfileTop/ProfileTop";
import { StartPost } from "./MainContent/StartPost";
import UserPost from "./MainContent/UserPost";
import { useSelector } from "react-redux";

export const MainContent = () => {
  const [posts, setPosts] = useState([]);
  const { latestPost: latestPostId } = useSelector((state) => state.user);
  const [latestPost, setLatestPost] = useState(null);

  const getRandomPosts = (arr, num) => {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());

    return shuffled.slice(0, num);
  };

  const getLatestPost = async (postId) => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };

    const res = await fetch(
      `https://striveschool-api.herokuapp.com/api/posts/${postId}`,
      options
    );
    const data = await res.json();
    setLatestPost(data);
  };

  const getPosts = async () => {
    const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Mzk4M2ZkMDQwNWJkYTAwMTUwOTE4NDEiLCJpYXQiOjE2NzA5MjIxOTIsImV4cCI6MTY3MjEzMTc5Mn0.HboxcDkCT7oe0t-xsSrEFfXdJbKvdPnGhJVNYl9t1A0",
      },
    };
    const res = await fetch(
      "https://striveschool-api.herokuapp.com/api/posts/",
      options
    );
    const postsArr = await res.json();
    const randomPosts = getRandomPosts(postsArr, 20);
    setPosts(randomPosts);
  };

  useEffect(() => {
    getPosts();
  }, []);

  useEffect(() => {
    getLatestPost(latestPostId);
  }, [latestPostId]);

  return (
    <div className="main-content">
      <ProfileTop />
      <JobSearch />
      <StartPost />
      {latestPost ? <UserPost key={latestPost._id} post={latestPost} /> : null}
      {posts &&
        posts.map((post) =>
          post.image !== undefined && post.user ? (
            <UserPost key={post._id} post={post} />
          ) : (
            <div></div>
          )
        )}
    </div>
  );
};
