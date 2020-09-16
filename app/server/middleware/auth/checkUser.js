import { WorkerModel } from "../../models/workers"
import { CompanyModel } from "../../models/company"

export const checkUser = async (req, res, next) => {
  try {
    if (req.body.select === "worker") {
      const check = await WorkerModel.findOne({ username: req.body.username })
        .select("username")
        .sort("username")
        .lean()
        .exec()

      if (check) {
        if (req.body.username === check.username) {
          return res.status(400).send("This username is already in use.")
        }
      }

      return next()
    } else {
      const check = await CompanyModel.findOne({ username: req.body.username })
        .select("username")
        .sort("username")
        .lean()
        .exec()

      if (check) {
        if (req.body.username === check.username) {
          return res.status(400).send("This username is already in use.")
        }
      }

      return next()
    }
  } catch (err) {
    return next(err)
  }
}
