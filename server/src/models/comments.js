import { Schema, model } from "mongoose";

const commentSchema = new Schema({
  comment: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
}, { timestamps: true });

export default model("Comment", commentSchema);
