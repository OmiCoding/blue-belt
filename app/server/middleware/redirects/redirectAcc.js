export const redirectAcc = (req, res, next) => {
  if (req.session.passport) {
    if (req.session.passport.user) {
      if (req.user.role === "worker") return res.redirect("/dashboard/worker")
      else if (req.user.role === "company") {
        return res.redirect("/dashboard/company")
      }
    }
    return next()
  }
  return next()
}
