import { JobPostModel } from "../models/JobPosts"

export const jobPost = (req, res, next) => {
  try {
    const { companyName, title, body, location, jobType, salary } = req.body

    const post = new JobPostModel({
      company: req.user.id,
      companyName,
      title,
      body,
      location,
      jobType,
      salary: salary,
    })
    post.save((err, data) => {
      if (err) {
        return next(err)
      }
      return res.status(200).json({ msg: "Ok" })
    })
  } catch (err) {
    return next(err)
  }
}
