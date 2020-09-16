export const auth = (req, res, next) => {
  try {
    if (req.user.role === "worker") {
      return res.status(200).json({
        authenticated: req.user.authenticated,
        role: req.user.role,
      })
    } else if (req.user.role === "company") {
      return res.status(200).json({
        authenticated: req.user.authenticated,
        role: req.user.role,
      })
    } else {
      return res.redirect("/login")
    }
  } catch (err) {
    return next(err)
  }
}
