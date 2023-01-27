import express from "express";
import UsersModel from "../models/users.js";
import createHttpError from "http-errors";

import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

const usersRouter = express.Router();

const cloudinaryUploader = multer({
  storage: new CloudinaryStorage({
    cloudinary, // cloudinary is going to search in .env vars for smt called process.env.CLOUDINARY_URL
    params: {
      folder: "epicode/linkedinUser"
    }
  })
}).single("profile");

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await UsersModel(req.body);
    newUser.save((err, response) => {
      if (err) {
        next(createHttpError(400, "Please enter unique username"));
      } else {
        res.status(201).send({ id: response._id });
      }
    });
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await UsersModel.find();
    console.log(users);
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/:userId", async (req, res, next) => {
  try {
    const user = await UsersModel.findById(req.params.userId);
    if (user) res.send(user);
    else
      next(
        createHttpError(404, `User with id ${req.params.userId} not found!`)
      );
  } catch (error) {
    next(error);
  }
});

usersRouter.put("/:userId", async (req, res, next) => {
  try {
    const updatedUser = await UsersModel.findByIdAndUpdate(
      req.params.userId,
      req.body,
      { new: true, runValidators: true }
    );
    if (updatedUser) res.status(200).send(updatedUser);
    else
      next(
        createHttpError(404, `User with id ${req.params.userId} not found!`)
      );
  } catch (error) {
    next(error);
  }
});

usersRouter.delete("/:userId", async (req, res, next) => {
  try {
    const deleteUser = await UsersModel.findByIdAndDelete(req.params.userId);
    if (deleteUser) res.status(204).send();
    else
      next(createHttpError(404, `User with id ${req.params.userId} not found`));
  } catch (error) {
    next(error);
  }
});

usersRouter.post(
  "/:userId/picture",
  cloudinaryUploader,
  async (req, res, next) => {
    try {
      const url = req.file.path;
      const user = await UsersModel.findById(req.params.userId);
      if (user) {
        user.image = url;
        await user.save();
        res.send("User profile upload successfully");
      } else
        next(
          createHttpError(400, `User with id ${req.params.userId} not found!`)
        );
    } catch (error) {
      next(error);
    }
  }
);

export default usersRouter;
