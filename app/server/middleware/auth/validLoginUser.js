import Joi from "@hapi/joi"
import { validateLoginPass, validateLoginEmail } from "../validation"

export const validLoginUser = async (req, res, next) => {
  try {
    const joiSchema = Joi.object({
      email: Joi.string().trim().required(),
      password: Joi.string().trim().min(8).required(),
    })

    await joiSchema.validateAsync(req.body)

    const { email, password } = req.body

    const checkPass = validateLoginPass(password)

    const checkEmail = validateLoginEmail(email)

    if (typeof checkPass === "string") {
      return res.status(400).json({
        msg: checkPass,
      })
    }

    if (typeof checkEmail === "string") {
      return res.status(400).json({
        msg: checkEmail,
      })
    }

    return next()
  } catch (err) {
    return next(err)
  }
}
