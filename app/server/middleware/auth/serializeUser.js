export const serializeUser = (user, done) => {
  let key
  if (user.role === "worker") {
    key = {
      id: user.id,
      authenticated: user.authenticated,
      role: user.role,
      username: user.username,
    }
  } else if (user.role === "company") {
    key = {
      id: user.id,
      authenticated: user.authenticated,
      role: user.role,
      username: user.username,
    }
  }
  done(null, key)
}
