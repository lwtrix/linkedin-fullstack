import express from "express";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import profileRouter from "./api/profileRouter.js";
import usersRouter from "./api/usersRouter.js";
import {
  badRequestHander,
  unauthorizedHandler,
  notFoundHandler,
  genericErrorHandler
} from "./errorHandlers.js";

const port = process.env.PORT;

const server = express();

server.use(express.json());

//**************************** ENDPOINTS **************************** */
server.use("/users", usersRouter);
server.use("/profile", profileRouter)

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
