import express from "express";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import usersRouter from "./api/usersRouter.js";
import cors from 'cors'

import {
  badRequestHander,
  unauthorizedHandler,
  notFoundHandler,
  genericErrorHandler
} from "./errorHandlers.js";

import postsRouter from "./api/postsRouter.js";
import experiencesRouter from "./api/experiencesRouter.js";
import commentsRouter from "./api/commentsRouter.js";

const port = process.env.PORT;

const server = express();

server.use(cors())
server.use(express.json());

//**************************** ENDPOINTS **************************** */
server.use("/users", usersRouter);
server.use('/posts', postsRouter)
server.use('/experiences', experiencesRouter)
server.use('/comments', commentsRouter)


//**************************** ERROR HANDLERS **************************** */
server.use(badRequestHander); // 400
server.use(unauthorizedHandler); // 401
server.use(notFoundHandler); // 404
server.use(genericErrorHandler); // 500

//************************** MONGODB CONNECT ************************** */
mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("DB:ON Live");
  server.listen(port, () => {
    console.table(listEndpoints(server));
    console.log("Sever running on port:", port);
  });
});
