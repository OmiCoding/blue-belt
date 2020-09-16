import bcrypt from "bcryptjs"

import { WorkerModel } from "../models/workers"
import { parsePhoneNumberFromString } from "libphonenumber-js"
/*  
  route: /register
  Register controller
*/

export const registerWorker = async (req, res, next) => {
  try {
    const {
      username,
      password,
      email,
      fName,
      lName,
      phone,
      dob,
      sex,
      gender,
      prefName,
      delivery,
      province,
      city,
      aptSuite,
      zipCode,
      postalCode,
      country,
      career,
      experience,
      education,
      employed,
      choice,
    } = req.body

    console.log(req.body)

    const phoneNumber = parsePhoneNumberFromString(phone, "US")

    const salt = await bcrypt.genSalt(12)

    const hashedPass = await bcrypt.hash(password, salt)

    const newUser = new WorkerModel({
      username: username,
      password: hashedPass,
      email: email.toLowerCase(),
      phone: phoneNumber.format("NATIONAL"),
      person: {
        firstName: fName,
        lastName: lName,
        dob: dob,
        sex: sex,
        gender: gender,
        prefName: prefName,
        choice: choice ? choice : "NA",
        address: {
          delivery: delivery,
          province: province,
          city: city,
          aptSuite: aptSuite === "" ? aptSuite : "NA",
          zipCode: zipCode ? zipCode : "XXXXX",
          postalCode: postalCode ? postalCode : "XXXXX-XXXX",
          country: country,
        },
      },
      profession: {
        career: career,
        experience: experience,
        education: education,
        employed: employed,
      },
    })

    // eslint-disable-next-line no-unused-vars
    newUser.save((err, newUser) => {
      if (err) {
        return next(err)
      } else {
        // session initialization goes here
        // TODO: Email confirmation is sent out
        return res.status(200).json({ msg: "OK" })
      }
    })
  } catch (err) {
    return next(err)
  }
}

// const checkUser = await UserModel.findOne({
//   email: email,
//   username: username,
//   phone: phoneNumber.format("NATIONAL"),
// })
//   .sort("email")
//   .select("username email phone")
//   .lean()
//   .exec()

// if (checkUser) {
//   if (email.toLowerCase() === checkUser.email) {
//     res.status(400).send("This email is already in use.")
//     return
//   }
//   if (username === checkUser.username) {
//     res.status(400).send("This username is already in use.")
//     return
//   }

//   if (phoneNumber.format("NATIONAL") === checkUser.phone) {
//     res.status(400).send("This phone number is already in use.")
//     return
//   }
// }
