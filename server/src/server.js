import express from "express";
import mongoose from 'mongoose'

const port = process.env.PORT
const server = express()

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.on('connected', () => {
    console.log('DB:ON Live')
    server.listen(3000, () => {
        console.log('Sever running on port:', port)
    })
})
