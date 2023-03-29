import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const { Schema, model } = mongoose;
const usersSchema = new Schema(
  {
    name: { type: String, required: [true, "Please provide name"] },
    surname: { type: String, required: [true, "Please provide surname"] },
    email: { type: String, required: [true, "Please provide email"] },
    bio: { type: String, required: [true, "Please provide bio"] },
    title: { type: String, required: [true, "Please provide title"] },
    area: { type: String, required: [true, "Please provide area"] },
    image: { type: String, required: [true, "Please provide image"] },
    username: { type: String, required: [true, "Please provide username"], unique: true
    },
    experience: [{ type: Schema.Types.ObjectId, ref: "Experience" }]
  },
  {
    timestamps: true
  }
);
usersSchema.plugin(uniqueValidator);
export default model("User", usersSchema);
