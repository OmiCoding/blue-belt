import { JobPostModel } from "../models/JobPosts"

export const getJobDetails = (req, res, next) => {
  try {
    console.log(req.body.id)
    JobPostModel.findById(req.body.id)
      .select("companyName title body jobType salary")
      .lean()
      .exec((err, data) => {
        if (err) {
          return next(err)
        }

        return res.status(200).json(data)
      })
  } catch (err) {
    return next(err)
  }
}
