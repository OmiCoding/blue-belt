export const confirmEmail = (req, res, next) => {
  try {
    // Confirmation Email code here...
    return next()
  } catch (err) {
    return next(err)
  }
}
