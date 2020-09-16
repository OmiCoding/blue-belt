import Joi from "@hapi/joi"

import {
  validateUser,
  validateEmail,
  validatePass,
  validatePhone,
  validateCompanyName,
  validateCity,
  validateProvince,
  validateZipCode,
  validatePostalCode,
} from "../../middleware/validation"

export const validRegisterCompany = async (req, res, next) => {
  try {
    const registerSchema = Joi.object({
      username: Joi.string().trim().min(3).max(120).required(),
      password: Joi.string().trim().min(8).required(),
      confirmPass: Joi.string().trim().min(8).required(),
      email: Joi.string().trim().required(),
      confirmEmail: Joi.string().trim().required(),
      phone: Joi.string().trim().min(12).required(),
      name: Joi.string().trim().min(2).required(),
      location: Joi.string().trim().min(1).required(),
      province: Joi.string().trim().uppercase().min(2).max(2).required(),
      country: Joi.string().trim().min(2).max(2).uppercase().required(),
      city: Joi.string().trim().allow(""),
      floor: Joi.string().trim().empty("").default("NA"),
      zipCode: Joi.string()
        .trim()
        .allow("XXXXX")
        .default("XXXXX")
        .min(5)
        .max(5),
      postalCode: Joi.string()
        .trim()
        .allow("XXXXX-XXXX")
        .default("XXXXX-XXXX")
        .min(10)
        .max(10),
      choice: Joi.string().allow(""),
      select: Joi.string().required(),
    })

    await registerSchema.validateAsync(req.body)

    const {
      username,
      email,
      confirmEmail,
      password,
      confirmPass,
      phone,
      name,
      city,
      province,
      zipCode,
      postalCode,
    } = req.body

    const checkUser = validateUser(username)
    const checkPass = validatePass(password, confirmPass)
    const checkEmail = validateEmail(email, confirmEmail)
    const checkPhone = validatePhone(phone)
    const checkName = validateCompanyName(name)
    const checkProvince = validateProvince(province)
    const checkCity = validateCity(city)
    let checkZip
    let checkPostal

    if (zipCode !== "XXXXX") {
      checkZip = validateZipCode(zipCode)
    }

    if (postalCode !== "XXXXX-XXXX") {
      checkPostal = validatePostalCode(postalCode)
    }

    if (typeof checkUser === "string") {
      return res.status(400).json({ msg: checkUser })
    }

    if (typeof checkPass === "string") {
      return res.status(400).json({ msg: checkPass })
    }

    if (typeof checkEmail === "string") {
      return res.status(400).json({ msg: checkPass })
    }

    if (typeof checkPhone === "string") {
      return res.status(400).json({ msg: checkPhone })
    }

    if (typeof checkName === "string") {
      return res.status(400).json({ msg: checkName })
    }

    if (typeof checkProvince === "string") {
      return res.status(400).json({
        msg: checkProvince,
      })
    }
    if (typeof checkCity === "string") {
      return res.status(400).json({
        msg: checkCity,
      })
    }
    if (typeof checkZip === "string") {
      return res.status(400).json({
        msg: checkZip,
      })
    }
    if (typeof checkPostal === "string") {
      return res.status(400).json({
        msg: checkPostal,
      })
    }

    return next()
  } catch (err) {
    console.error(err)
    return res
      .status(400)
      .send("Please make sure information is set correctly.")
  }
}
