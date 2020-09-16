import { Schema, model } from "mongoose"

import DetailsSchema from "./Details"

const CompanySchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  authenticated: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    required: true,
    default: "company",
  },

  details: DetailsSchema,
})

export const CompanyModel = model("company", CompanySchema)
