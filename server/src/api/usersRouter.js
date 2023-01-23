import express from "express";
import UsersModel from "../models/users.js";
import createHttpError from "http-errors";

const usersRouter = express.Router();

usersRouter.post("/", async (req, res, next) => {
  try {
    const newUser = await UsersModel(req.body);
    const { _id } = await newUser.save();
    res.status(201).send({ id: _id });
  } catch (error) {
    next(error);
  }
});

usersRouter.get("/", async (req, res, next) => {
  try {
    const users = await UsersModel.find();
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
export default usersRouter;
