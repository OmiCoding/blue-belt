import { parsePhoneNumberFromString } from "libphonenumber-js"
import { WorkerModel } from "../../models/workers"
import { CompanyModel } from "../../models/company"

export const checkPhone = async (req, res, next) => {
  try {
    if (req.body.select === "worker") {
      const phoneNumber = parsePhoneNumberFromString(req.body.phone, "US")

      const check = await WorkerModel.findOne({
        phone: phoneNumber.format("NATIONAL"),
      })
        .select("phone")
        .sort("phone")
        .lean()
        .exec()

      if (check) {
        if (phoneNumber.format("NATIONAL") === check.phone) {
          return res.status(400).send("This phone number is already in use.")
        }
      }

      return next()
    } else {
      const phoneNumber = parsePhoneNumberFromString(req.body.phone, "US")

      const check = await CompanyModel.findOne({
        phone: phoneNumber.format("NATIONAL"),
      })
        .select("phone")
        .sort("phone")
        .lean()
        .exec()

      if (check) {
        if (phoneNumber.format("NATIONAL") === check.phone) {
          return res.status(400).send("This phone number is already in use.")
        }
      }
      console.log("yes")

      return next()
    }
  } catch (err) {
    return next(err)
  }
}
