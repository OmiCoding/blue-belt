import { CompanyModel } from "../../models/company/Company"
import bcrypt from "bcryptjs"

export const companyCB = (username, password, done) => {
  // Find User in the database
  try {
    CompanyModel.findOne({ email: username })
      .select("email username password authenticated role")
      .lean()
      .exec((err, data) => {
        if (err) {
          return done(err)
        }

        if (!data) {
          return done(null, false)
        }

        // username doesn't match
        if (data.email !== username) {
          return done(null, false)
        }

        // password doesn't match
        if (!bcrypt.compareSync(password, data.password)) {
          return done(null, false)
        }

        return done(null, {
          id: data._id,
          authenticated: data.authenticated,
          role: data.role,
          username: data.username,
        })
      })
  } catch (err) {
    return done(err)
  }
}
