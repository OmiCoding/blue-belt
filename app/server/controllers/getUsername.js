export const getUsername = (req, res, next) => {
  try {
    return res.status(200).json({ username: req.user.username })
  } catch (err) {
    return next(err)
  }
}
