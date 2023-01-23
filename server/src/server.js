import express from "express";
import mongoose from 'mongoose'
import postsRouter from "./api/postsRouter.js";

const port = process.env.PORT

const server = express()

server.use(express.json())
server.use('/posts', postsRouter)

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', () => {
    console.log('DB:ON Live')
    server.listen(port, () => {
        console.log('Sever running on port:', port)
    })
})
