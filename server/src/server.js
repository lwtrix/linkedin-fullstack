import express from "express";
import listEndpoints from "express-list-endpoints";
import mongoose from "mongoose";
import usersRouter from "./api/usersRouter.js";
import postsRouter from "./api/postsRouter.js";

const port = process.env.PORT;

const server = express();

server.use(express.json());

//**************************** ENDPOINTS **************************** */
server.use("/users", usersRouter);
server.use('/posts', postsRouter)


//************************** MONGODB CONNECT ************************** */
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL);
mongoose.connection.on("connected", () => {
  console.log("DB:ON Live");
    server.listen(port, () => {
        console.table(listEndpoints(server));
    console.log("Sever running on port:", port);
  });
});
