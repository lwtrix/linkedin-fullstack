import express from "express";
import UsersModel from "../models/users.js";
import ExperiencesModel from "../models/experiences.js";
import createHttpError from "http-errors";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";
import json2csv from "json2csv";
import { pipeline } from "stream";

const experiencesRouter = express.Router();

const cloudinaryUploader = multer({
  storage: new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "build-week/experience-imgs",
    },
  }),
}).single("image");

experiencesRouter.get("/:userId", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await (
      await UsersModel.findById(userId)
    ).populate("experience");
    if (user) {
      if (user.experience.length) {
        res.send(user.experience);
      } else {
        res.send(`User ${user.username} has no experiences`);
      }
    } else {
      next(
        createHttpError(404, `user with id ${req.params.userId} not found!`)
      );
    }
  } catch (error) {
    next(error);
  }
});
experiencesRouter.get("/:userId/download/csv", async (req, res, next) => {
  try {
    const { userId } = req.params;
    const user = await UsersModel.findById(userId).populate("experience");
    if (user) {
      if (user.experience.length) {
        res.setHeader(
          "Content-Disposition",
          "attachment; filename=experiences.csv"
        );

        const source = JSON.stringify(user.experience);

        const transform = new json2csv.Transform({
          fields: ["area", "role", "company", "description"],
        });
        const destination = res;
        pipeline(source, transform, destination, (err) => {
          if (err) console.log(err);
          else console.log("CSV conversion with success");
        });
      } else {
        res
          .status(204)
          .send(
            `User with id: ${userId} does not have any experiences added yet`
          );
      }
    } else {
      next(
        createHttpError(404, `user with id ${req.params.userId} not found!`)
      );
    }
  } catch (error) {
    next(error);
  }
});

experiencesRouter.get("/:userId/:expId", async (req, res, next) => {
  try {
    const user = await UsersModel.findById(req.params.userId).populate(
      "experience"
    );

    if (user) {
      const selectedExperience = user.experience.find(
        (experience) => experience._id.toString() === req.params.expId // You CANNOT compare a string(req.params.productId) with an ObjectId (product._id) --> you have to either convert _id into string or ProductId into ObjectId
      );
      if (selectedExperience) {
        res.send(selectedExperience);
      } else {
        next(
          createHttpError(
            404,
            `experience with id ${req.params.expId} not found!`
          )
        );
      }
    } else {
      next(
        createHttpError(404, `user with id ${req.params.userId} not found!`)
      );
    }
  } catch (error) {
    next(error);
  }
});

experiencesRouter.post(
  "/:userId/:expId/upload/image",
  cloudinaryUploader,
  async (req, res, next) => {
    try {
      const url = req.file.path;
      const user = await UsersModel.findById(req.params.userId).populate(
        "experience"
      );
      if (user) {
        const experience = await ExperiencesModel.findByIdAndUpdate(
          req.params.expId,
          { image: url },
          { new: true }
        );
        if (experience) {
          res.send(experience);
        } else {
          next(createHttpError(400, `Could not upload image`));
        }
      } else {
        next(
          createHttpError(
            404,
            `experience with id ${req.params.expId} not found!`
          )
        );
      }
    } catch (error) {
      next(error);
    }
  }
);

experiencesRouter.post("/:userId", async (req, res, next) => {
  try {
    const user = await UsersModel.findById(req.params.userId);
    if (user) {
      const newExperience = new ExperiencesModel({ ...req.body });
      newExperience.startDate = new Date();
      newExperience.endDate = new Date();
      await newExperience.save();

      user.experience.push(newExperience);
      user.save();

      res.send(user);
    } else {
      next(
        createHttpError(
          404,
          `User with id ${req.params.userId} not found in request!`
        )
      );
    }
  } catch (error) {
    next(error);
  }
});

experiencesRouter.put("/:userId/:expId", async (req, res, next) => {
  try {
    const user = await UsersModel.findById(req.params.userId);

    if (user) {
      const updatedExperience = await ExperiencesModel.findByIdAndUpdate(
        req.params.expId,
        { ...req.body },
        { new: true, runValidators: true }
      );
      if (updatedExperience) {
        res.send(updatedExperience);
      } else {
        next(
          createHttpError(
            404,
            `Experience with id: ${req.params.expId} not found or cannot be edited`
          )
        );
      }
    } else {
      next(createHttpError(404, `User with id ${req.params.userId} not found`));
    }
  } catch (error) {
    next(error);
  }
});

experiencesRouter.delete(
  "/:userId/:expId",
  async (req, res, next) => {
    try {
      const { userId, expId} = req.params

      const user = await UsersModel.findById(userId)

      if(user) {
        const deletedExp = await ExperiencesModel.findByIdAndDelete(expId)

        if(deletedExp) {
          res.status(200).send('Experience successfully deleted')
        } else {
          next(createHttpError(404, 'Could not find experience or it was already deleted'))
        }
      } else {
        next(createHttpError(404, `Cannot find user with id: ${userId}`))
      }
    } catch (error) {
      next(error);
    }
  }
);

export default experiencesRouter;
