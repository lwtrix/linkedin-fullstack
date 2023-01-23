/*      "name": "Diego",
        "surname": "Banovaz",
        "email": "diego@strive.school",
        "bio": "SW ENG",
        "title": "COO @ Strive School",
        "area": "Berlin",
        "image": ..., //server generated on upload, set a default here
        "username": "admin", //need to be unique
        "experiences: { type: Schema.Types.ObjectId, ref: Experience"
        export default model('Experience', experienceSchema)
*/

import mongoose from "mongoose";
const { Schema, model } = mongoose;

const usersSchema = new Schema(
  {
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    bio: { type: String, required: true },
    title: { type: String, required: true },
    area: { type: String, required: true },
    image: { type: String, required: true },
    username: { type: String, required: true },
    experience: { type: Schema.Types.ObjectId, ref: "Experience" }
  },
  {
    timestamps: true
  }
);

export default model("User", usersSchema);

