import { JobPostModel } from "../models/JobPosts"

export const getJobPostings = (req, res, next) => {
  try {
    JobPostModel.find({ company: req.user.id })
      .select("_id companyName createdAt jobType location salary title")
      .lean()
      .exec((err, data) => {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          list: [...data],
          pathname: `/dashboard/company/${req.user.username}/postings/jobpost`,
        })
      })
  } catch (err) {
    return next(err)
  }
}
