export const redirectGuest = (req, res, next) => {
  if (!req.user) {
    return res.redirect("/login")
  }
  return next()
}
