export const checkAuth = (req, res, next) => {
  if (!req.user) {
    return res.status(401).send("Not authorized.")
  }

  return next()
}
