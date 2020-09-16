export const logErrors = (err, req, res, next) => {
  console.error(err)
  return next(err)
}
