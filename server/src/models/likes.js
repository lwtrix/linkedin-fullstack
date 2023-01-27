import { Schema, model } from 'mongoose'

const likeSchema = new Schema({
    user: { type: Object, required: true}
}, { timestamps: true })

export default model('Like', likeSchema)