import { parsePhoneNumberFromString } from "libphonenumber-js"
import { CompanyModel } from "../models/company"

import bcryptjs from "bcryptjs"

export const registerCompany = async (req, res, next) => {
  try {
    const {
      username,
      password,
      email,
      phone,
      name,
      location,
      city,
      floor,
      zipCode,
      province,
      postalCode,
      country,
      choice,
    } = req.body

    console.log(req.body)

    const phoneNumber = parsePhoneNumberFromString(phone, "US")

    const salt = await bcryptjs.genSalt(12)

    const hashedPass = await bcryptjs.hash(password, salt)

    const companyModel = new CompanyModel({
      username,
      password: hashedPass,
      email: email.toLowerCase(),
      phone: phoneNumber.format("NATIONAL"),
      details: {
        name,
        choice,
        address: {
          location,
          city,
          floor: floor === "" ? "NA" : floor,
          zipCode: zipCode === "" ? zipCode : "XXXXX",
          postalCode: postalCode ? postalCode : "XXXXX-XXXX",
          province,
          country,
        },
      },
    })

    companyModel.save((err, newComp) => {
      if (err) {
        return next(err)
      } else {
        return res.status(200).json({ msg: "OK" })
      }
    })
  } catch (err) {
    return next(err)
  }
}
