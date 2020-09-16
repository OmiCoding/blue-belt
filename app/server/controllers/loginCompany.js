import passport from "passport"

export const loginCompany = (req, res, next) => {
  try {
    passport.authenticate("company", function (err, user, info) {
      if (err) {
        return next(err)
      }

      if (!user) {
        return res.status(400).send("Incorrect credentials.")
      }

      req.login(user, function (err) {
        if (err) {
          return next(err)
        }
        return res.status(200).json({
          username: user.username,
        })
      })
    })(req, res, next)
  } catch (err) {
    return next(err)
  }
}
