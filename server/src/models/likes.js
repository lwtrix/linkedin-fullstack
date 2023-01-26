import { Schema, model } from 'mongoose'

const likeSchema = new Schema({
    user: { type: Schema.Types.ObjectId, required: true, ref: 'User'}
}, { timestamps: true })

export default model('Like', likeSchema)