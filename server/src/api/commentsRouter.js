import express from "express";
import Comments from "../models/comments.js";
import Users from "../models/users.js";
import Posts from "../models/posts.js";
import { Types } from "mongoose";

const commentsRouter = express.Router();
const loggedUser = '63ce67c5b87b8603d6e1fb31';

commentsRouter.get("/:postId", async (req, res, next) => {
  try {
    const { comments } = await Posts.findById(req.params.postId).populate({
      path: "comments",
      populate: {
        path: "user",
        select: { _id: 1, username: 1, title: 1, image: 1 },
      },
    });
    if (comments.length) {
      res.send(comments);
    } else {
      res.status(404).json({
        message: `No comments found for post with id: ${req.params.postId}`,
      });
    }
  } catch (error) {
    next(error);
  }
});

commentsRouter.get("/:postId/:commId", async (req, res, next) => {
  try {
    const { postId, commId } = req.params;

    const { comments } = await Posts.findById(postId).populate("comments");
    const comment = comments.find((comm) => comm._id.toString() === commId);

    if (comment) {
      res.send(comment);
    } else {
      res.status(404).json({ message: `Comment with id: ${commId} not found` });
    }
  } catch (error) {
    next(error);
  }
});

commentsRouter.post("/:postId", async (req, res, next) => {
  try {
    const user = await Users.findById(loggedUser);

    if (user) {
      const post = await Posts.findById(req.params.postId);

      if (post) {
        const comment = new Comments({ ...req.body });
        comment.user = user;
        post.comments.push(comment);

        if (comment) {
          comment.save();
          post.save();

          res.send(comment);
        } else {
          res.status(400).json({
            message: "Something went wrong, your comment could not be created",
          });
        }
      } else {
        res
          .status(404)
          .json({ message: `Post with id: ${req.params.postId} not found` });
      }
    } else {
      res.status(404).json({ message: `User not found` });
    }
  } catch (error) {
    next(error);
  }
});
commentsRouter.put("/:postId/:commId", async (req, res, next) => {
  try {
    const { postId, commId } = req.params;

    const { comments } = await Posts.findById(postId).populate("comments");
    const comment = comments.find((comm) => comm._id.toString() === commId);

    if (comment) {
      const updatedComm = await Comments.findByIdAndUpdate(
        commId,
        { comment: req.body.comment },
        { new: true }
      );

      if (updatedComm) {
        res.send(updatedComm);
      } else {
        res
          .status(400)
          .json({ message: "Could not create comment, try again later" });
      }
    } else {
      res
        .status(404)
        .json({ message: `Could not find comment with id: ${commId}` });
    }
  } catch (error) {
    next(error);
  }
});
commentsRouter.delete("/:postId/:commId", async (req, res, next) => {
  try {
    const { commId, postId } = req.params;
    const post = await Posts.findById(postId).populate('comments', '_id')
console.log(post)
    post.comments = post.comments.filter(comm => comm._id.toString() !== commId)
    await post.save()
    const comment = await Comments.findByIdAndDelete(commId);

    if (comment) {
      res
        .status(200)
        .json({ message: `Comment with id: ${commId} deleted with success` });
    } else {
      res
        .status(200)
        .json({ message: `Comment with id: ${commId} does not exist` });
    }
  } catch (error) {
    next(error);
  }
});

export default commentsRouter;
