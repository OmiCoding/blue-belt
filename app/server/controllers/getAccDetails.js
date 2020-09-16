/*
 * route: /dashboard
 * Method: GET
 *
 * This method is to fetch initial data from the user
 *
 */

import { WorkerModel } from "../models/workers"

import { CompanyModel } from "../models/company"

// TODO: Change routes when production
export const getAccDetails = (req, res, next) => {
  try {
    if (req.user.role === "worker") {
      WorkerModel.findById(req.user.id)
        .select("email person profession")
        .lean()
        .exec((err, data) => {
          if (err) {
            return next(err)
          }

          console.log(data)
          return res.status(200).json({
            role: req.user.role,
            username: req.user.username,
            email: data.email,
            fName: data.person.firstName,
            lName: data.person.lastName,
            city: data.person.address.city,
            province: data.person.address.province,
            career: data.profession.career,
            education: data.profession.education,
            experience: data.profession.experience,
            employed: data.profession.employed,
          })
        })
    } else if (req.user.role === "company") {
      CompanyModel.findById(req.user.id)
        .select("username email role details")
        .lean()
        .exec((err, data) => {
          if (err) {
            return next(err)
          }
          return res.status(200).json({
            role: req.user.role,
            username: req.user.username,
            email: data.email,
            companyName: data.details.name,
            city: data.details.address.city,
            province: data.details.address.province,
          })
        })
    } else {
      return res.redirect(500, "/login")
    }
  } catch (err) {
    return next(err)
  }
}
