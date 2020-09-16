export const redirectCompany = (req, res, next) => {
  try {
    if (req.user.role === "company") {
      res.redirect(401, "/dashboard/company" + req.user.username)
    }
    return next()
  } catch (err) {
    return next(err)
  }
}
