export let MONGO_OPTIONS

export let MONGODB_URI

// if (process.env.DBPATH === "docker") {
const {
  MONGODB_ADMINUSER = "useromi",
  MONGODB_ADMINPASS = "omipublic123",
  MONGODB_DB = "blubelt",
  MONGODB_AUTHSOURCE = "blubelt",
} = process.env

MONGO_OPTIONS = {
  user: MONGODB_ADMINUSER,
  pass: MONGODB_ADMINPASS,
  dbName: MONGODB_DB,
  authSource: MONGODB_AUTHSOURCE,
  useNewUrlParser: true,
  autoIndex: false,
  useUnifiedTopology: true,
}
MONGODB_URI =
  process.env.ENV === "production"
    ? "mongodb://db:27017/blubelt"
    : "mongodb://localhost:27017"
// }
// else {
//   const {
//     MONGODB_ADMINUSER = "useromi",
//     MONGODB_ADMINPASS = "omipublic123",
//     MONGODB_DB = "blubelt",
//     MONGODB_AUTHSOURCE = "admin",
//   } = process.env

//   MONGO_OPTIONS = {
//     user: MONGODB_ADMINUSER,
//     pass: MONGODB_ADMINPASS,
//     dbName: MONGODB_DB,
//     authSource: MONGODB_AUTHSOURCE,
//     useNewUrlParser: true,
//     autoIndex: false,
//     useUnifiedTopology: true,
//   }

//   MONGODB_URI = "mongodb://localhost:27017"
// }
