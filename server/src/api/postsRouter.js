import express, { json } from "express";
import Posts from "../models/posts.js";

const postsRouter = express.Router();

postsRouter.post("/", async (req, res, next) => {
  try {
    // x find user logged, retrieve his username and id
    // for new post

    const newPost = new Posts(...req.body);
    await newPost.save();

    if (newPost) {
      res.send(newPost);
    } else {
        res.status(400).json({ message: 'Could not create new post'})
    }
  } catch (error) {
    next(error)
  }
});
postsRouter.get("/", async (req, res, next) => {
    try {
        const posts = await Posts.find()
        if(posts) {
            res.send(posts)
        } else {
            res.status(404).json({ message: 'No available posts'})
        }
    } catch (error) {
        next(error)
    }
});
postsRouter.get("/", async (req, res, next) => {});
postsRouter.put("/", async (req, res, next) => {});
postsRouter.delete("/", async (req, res, next) => {});

export default postsRouter;
