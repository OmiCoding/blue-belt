import { WorkerModel } from "../../models/workers"
import { CompanyModel } from "../../models/company"

export const deserializeUser = (key, done) => {
  if (key.role === "worker") {
    WorkerModel.findById(key.id)
      .select("username authenticated role person")
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err)
        }

        done(null, {
          id: user._id,
          authenticated: user.authenticated,
          role: user.role,
          username: user.username,
        })
      })
  } else if (key.role === "company") {
    CompanyModel.findById(key.id)
      .select("username authenticated role")
      .lean()
      .exec((err, user) => {
        if (err) {
          return done(err)
        }
        done(null, {
          id: user._id,
          authenticated: user.authenticated,
          role: user.role,
          username: user.username,
        })
      })
  }
}
