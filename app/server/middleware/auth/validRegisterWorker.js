import Joi from "@hapi/joi"
import {
  validateUser,
  validateEmail,
  validatePass,
  validatePhone,
  validateName,
  validateDOB,
  validateSex,
  validateCity,
  validatePostalCode,
  validateZipCode,
  validateProvince,
  validateEmployment,
} from "../validation"

/*
  route : /register
  Validating register info before creating new user
*/

export const validRegisterWorker = async (req, res, next) => {
  try {
    const registerSchema = Joi.object({
      username: Joi.string().trim().min(3).max(120).required(),
      password: Joi.string().trim().min(8).required(),
      confirmPass: Joi.string().trim().min(8).required(),
      email: Joi.string().trim().required(),
      confirmEmail: Joi.string().trim().required(),
      phone: Joi.string().trim().min(12).required(),
      fName: Joi.string().trim().min(2).required(),
      lName: Joi.string().trim().min(2).required(),
      dob: Joi.string().trim().required(),
      sex: Joi.string().required(),
      gender: Joi.string().trim().empty("").default("NA"),
      prefName: Joi.string().trim().empty("").default("NA"),
      delivery: Joi.string().trim().min(1).required(),
      province: Joi.string().trim().uppercase().min(2).max(2).required(),
      country: Joi.string().trim().min(2).max(2).uppercase().required(),
      city: Joi.string().trim().allow(""),
      aptSuite: Joi.string().trim().empty("").default("NA"),
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
      career: Joi.string().allow(""),
      education: Joi.string().required(),
      experience: Joi.string().required(),
      employed: Joi.boolean().required(),
      choice: Joi.string().allow(""),
      select: Joi.string().required(),
    })

    await registerSchema.validateAsync(req.body)

    const {
      username,
      password,
      confirmPass,
      email,
      confirmEmail,
      fName,
      lName,
      phone,
      dob,
      sex,
      province,
      city,
      zipCode,
      postalCode,
      employed,
    } = req.body

    const checkUser = validateUser(username)
    const checkPass = validatePass(password, confirmPass)
    const checkEmail = validateEmail(email, confirmEmail)
    const checkPhone = validatePhone(phone)
    const checkFName = validateName(fName)
    const checkLName = validateName(lName)
    const checkDOB = validateDOB(dob)
    const checkProvince = validateProvince(province)
    const checkEmployed = validateEmployment(employed)
    const checkSex = validateSex(sex)
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

    if (typeof checkFName === "string") {
      return res.status(400).json({ msg: checkFName })
    }

    if (typeof checkLName === "string") {
      return res.status(400).json({ msg: checkLName })
    }
    if (typeof checkDOB === "string") {
      return res.status(400).json({ msg: checkDOB })
    }
    if (typeof checkSex === "string") {
      return res.status(400).json({
        msg: checkSex,
      })
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
    if (typeof checkEmployed === "string") {
      return res.status(400).json({
        msg: checkEmployed,
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
