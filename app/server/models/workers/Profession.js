import { Schema } from "mongoose"

// TODO: Need to be able to upload a document and a set of images, might want to make a seperate schema for it
const ProfessionSchema = new Schema({
  career: {
    type: String,
    required: true,
    default: "NA",
  },
  education: {
    type: String,
    required: true,
    default: "NA",
  },
  experience: {
    type: String,
    required: true,
    default: "NA",
  },
  employed: {
    type: Boolean,
    required: true,
    default: false,
  },
})

// Certification
// Resume
// Etc.

export default ProfessionSchema
