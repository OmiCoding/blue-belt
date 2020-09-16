import { JobPostModel } from "../models/JobPosts/JobPosts"
export const jobs = (req, res, next) => {
  try {
    JobPostModel.find(req.body)
      .select("_id companyName title location jobType salary")
      .lean()
      .exec((err, data) => {
        if (err) {
          return next(err)
        }

        return res.status(200).json({
          list: [...data],
          pathname: `/dashboard/worker/${req.user.username}/jobs/jobpost`,
        })
      })
  } catch (err) {
    return next(err)
  }
}
