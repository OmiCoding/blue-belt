export const errorHandler = (err, req, res, next) => {
  return res.status(500).send("Something has gone wrong...")
}
