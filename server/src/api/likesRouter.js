import express from "express";
import Posts from "../models/posts.js";
import Likes from "../models/likes.js";
import Users from "../models/users.js";

import { Types } from "mongoose";
import posts from "../models/posts.js";

const loggedUser = "63ce67c5b87b8603d6e1fb31";

const likesRouter = express.Router();

likesRouter.get("/:postId", async (req, res, next) => {
  try {
    const { postId } = req.params;

    const { likes } = await Posts.findById(postId);
    if (likes) {
      res.status(200).send(likes);
    } else {
      res
        .status(404)
        .json({ message: `No likes found for post with id: ${postId}` });
    }
  } catch (error) {
    next(error);
  }
});

likesRouter.get("/:postId/users", async (req, res, next) => {
  try {
    const { postId } = req.params;

    const { likes } = await Posts.findById(postId).populate('likes');

    if (likes) {
      res.status(200).send(likes);
    } else {
      res
        .status(404)
        .json({ message: `No likes found for post with id: ${postId}` });
    }
  } catch (error) {
    next(error);
  }
});

likesRouter.put("/:postId", async (req, res, next) => {
  try {
    const { postId } = req.params;

    const post = await Posts.findById(postId).populate("likes");

    if (post) {
      const like = post.likes.find(
        (like) => like.user._id.toString() === loggedUser
      );

      if (!like) {
        const user = await Users.findById(loggedUser);
        const like = new Likes();

        like.user = user;
        post.likes.push(like);

        await like.save();
        await post.save();

        res
          .status(200)
          .json({ message: `Like added to post with id: ${postId}` });
      } else {
        post.likes = post.likes.filter(
          (like) => like.user._id.toString() !== loggedUser
        );

        await post.save();
        await Likes.findByIdAndDelete(like._id);

        res
          .status(201)
          .json({ message: `Like removed from post with id: ${postId}` });
      }
    } else {
      res
        .status(404)
        .json({ message: `Post with id: ${postId} does not exist` });
    }
  } catch (error) {
    next(error);
  }
});

export default likesRouter;
