import { Schema, model } from "mongoose"
import PersonSchema from "./Person"
import ProfessionSchema from "./Profession"

const WorkerSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    trim: true,
    minlength: 8,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  role: {
    type: String,
    default: "worker",
    required: true,
    unique: true,
  },
  authenticated: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  person: PersonSchema,
  profession: ProfessionSchema,
})

/*
How to indexing works is first starts with respect to the email, then email + username, and then finally
email + username + phone. This creates a B tree structure of the data 

*/
// UserSchema.index({ role: 1, email: 1, username: 1, phone: 1 }, { unique: true })

export const WorkerModel = model("worker", WorkerSchema)
