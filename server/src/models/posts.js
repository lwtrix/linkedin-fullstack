import { Schema, model } from 'mongoose'

const postSchema = new Schema({
    text: { type: String, required: true },
    username: { type: String, required: true },
    image: { type: String, default: ''},
    user: { type: Schema.Types.ObjectId, ref: 'User'}
}, { timestamps: true })

export default model('Post', postSchema)