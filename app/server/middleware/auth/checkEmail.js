import { WorkerModel } from "../../models/workers"
import { CompanyModel } from "../../models/company"
export const checkEmail = async (req, res, next) => {
  try {
    console.log("there")
    if (req.body.select === "worker") {
      const check = await WorkerModel.findOne({ email: req.body.email })
        .select("email")
        .sort("email")
        .lean()
        .exec()

      if (check) {
        if (req.body.email.toLowerCase() === check.email) {
          return res.status(400).send("This email is already in use.")
        }
      }
    } else {
      const check = await CompanyModel.findOne({ email: req.body.email })
        .select("email")
        .sort("email")
        .lean()
        .exec()

      if (check) {
        if (req.body.email.toLowerCase() === check.email) {
          return res.status(400).send("This email is already in use.")
        }
      }
    }

    return next()
  } catch (err) {
    return next(err)
  }
}
