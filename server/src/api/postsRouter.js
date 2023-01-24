import express, { json } from "express";
import createHttpError from "http-errors";
import Posts from "../models/posts.js";
import UsersModel from "../models/users.js";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const loggedUser = process.env.LOGGED_USER;
const postsRouter = express.Router();

const cloudUploader = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "linkedin/posts",
    },
  }),
}).single("image");

postsRouter.post("/", async (req, res, next) => {
  try {
    // x find user logged, retrieve his username and id
    // for new post

    const user = await UsersModel.findById(loggedUser);
    if (user) {
      const newPost = new Posts({ ...req.body });
      newPost.username = user.username;
      newPost.user = user;

      await newPost.save();
      if (newPost) {
        res.send(newPost);
      } else {
        res.status(400).json({ message: "Could not create new post" });
      }
    } else {
      next(
        createHttpError(
          404,
          `Cannot find user with id ${loggedUserId}, therefore cannot create post`
        )
      );
    }
  } catch (error) {
    next(error);
  }
});
postsRouter.get("/", async (req, res, next) => {
  try {
    const posts = await Posts.find();
    if (posts) {
      res.send(posts);
    } else {
      res.status(404).json({ message: "No available posts" });
    }
  } catch (error) {
    next(error);
  }
});
postsRouter.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundPost = await Posts.findById(id);

    if (foundPost) {
      res.status(200).send(foundPost);
    } else {
      next(createHttpError(404, `Cannot find post with id: ${id}`));
    }
  } catch (error) {
    next(error);
  }
});
postsRouter.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundPost = await Posts.findById(id).populate("user");

    if (foundPost.user._id.toString() === loggedUser) {
      const updatedPost = await Posts.findByIdAndUpdate(
        id,
        { ...req.body },
        { new: true, runValidators: true }
      );

      if (updatedPost) {
        res.status(201).send(updatedPost);
      } else {
        next(createHttpError(401, `Error with updating post with id: ${id}`));
      }
    } else {
      res.status(401).send({ message: "This post belongs to other user" });
    }
  } catch (error) {
    next(error);
  }
});
postsRouter.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const foundPost = await Posts.findById(id).populate("user");
    if (foundPost.user._id.toString() === loggedUser) {
      const deleted = await Posts.findByIdAndDelete(id);

      if (deleted) {
        res.status(200).send({ message: "Post deleted with success" });
      } else {
        next(createHttpError(401, `Error deleting post with id: ${id}`));
      }
    } else {
      res.status(401).send({ message: "This post belongs to other user" });
    }
  } catch (error) {
    next(error);
  }
});

postsRouter.post("/:id/upload/image", cloudUploader, async (req, res, next) => {
  try {
    const { id } = req.params;

    const url = req.file.path;
    const updatedPost = await Posts.findByIdAndUpdate(
      id,
      { image: url },
      { new: true }
    );

    if(updatedPost) {
      res.send(updatedPost)
    } else {
      next(createHttpError(400, `Error with uploading image to post`))
    }
  } catch (error) {
    next(error);
  }
});

export default postsRouter;
