export const redirectWorker = (req, res, next) => {
  try {
    if (req.user.role === "worker") {
      return res.redirect(401, "/dashboard/worker" + req.user.username)
    } else {
      return next()
    }
  } catch (err) {
    return next(err)
  }
}
