import { Schema, model } from "mongoose"

const JobPostSchema = new Schema(
  {
    company: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "company",
    },
    companyName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    jobType: {
      type: String,
    },
    salary: {
      type: String,
    },
  },
  { timestamps: true }
)

export const JobPostModel = model("jobpost", JobPostSchema)
