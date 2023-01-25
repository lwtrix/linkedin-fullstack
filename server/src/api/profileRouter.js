import express from "express";
import { pipeline } from "stream"; // CORE MODULE
import { getPDFReadableStream } from "../lib/pdf-tools.js";
import UsersModel from "../models/users.js";

const profileRouter = express.Router();

profileRouter.get("/:userId/CV", async (req, res, next) => {
  res.setHeader("Content-Disposition", "attachment; filename=UserCV.pdf");
  
  const userDetails = await UsersModel.findById(req.params.userId);
  const source = getPDFReadableStream(userDetails);
  const destination = res;
  pipeline(source, destination, (err) => {
    if (err) console.log(err);
    console.log("STREAM ENDED SUCCESSFULLY");
  });
});

export default profileRouter;
