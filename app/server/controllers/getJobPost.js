import { JobPostModel } from "../models/JobPosts"

export const getJobPost = (req, res, next) => {
  try {
    JobPostModel.findOne({ company: req.user.id, title: req.query.job })
      .select("_id companyName title location jobType salary body")
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
