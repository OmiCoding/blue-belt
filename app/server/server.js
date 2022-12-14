import path from "path"
import https from "https"
import http from "http"
import express from "express"
import morgan from "morgan"
import cors from "cors"
import helmet from "helmet"
import cookieParser from "cookie-parser"
import redis from "redis"
import session from "express-session"
import connectRedis from "connect-redis"
import mongoose from "mongoose"
import passport from "passport"
import "regenerator-runtime/runtime.js"
import { Strategy as LocalStrategy } from "passport-local"

import {
  HTTPPORT,
  HTTPSPORT,
  CREDENTIALS,
  REDIS_OPTIONS,
  SESSION_OPTIONS,
  MONGODB_URI,
  MONGO_OPTIONS,
  PASSPORT_LOCAL,
} from "./config"

import { renderer, logErrors, errorHandler } from "./controllers"

import register from "./routes/auth/register"
import login from "./routes/auth/login"
import dashboard from "./routes/base/dashboard"
import welcome from "./routes/base/welcome"
import {
  workerCB,
  companyCB,
  serializeUser,
  deserializeUser,
} from "./middleware/auth"

passport.use(
  "worker",
  new LocalStrategy(
    {
      ...PASSPORT_LOCAL,
    },
    workerCB
  )
)
passport.use(
  "company",
  new LocalStrategy(
    {
      ...PASSPORT_LOCAL,
    },
    companyCB
  )
)

const app = express()

const httpServer = http.createServer(app)
let httpsServer
if (CREDENTIALS) {
  httpsServer = https.createServer(CREDENTIALS, app)
}

// Setting up session storage
const RedisStore = connectRedis(session)
const redisClient = redis.createClient(REDIS_OPTIONS)

// Global middlewares that are used everywhere
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  cors({
    credentials: true,
  })
)
app.use(morgan("dev"))
app.use(helmet())
app.use(cookieParser())

passport.serializeUser(serializeUser)
passport.deserializeUser(deserializeUser)

app.use(
  session({
    ...SESSION_OPTIONS,
    store: new RedisStore({ client: redisClient }),
  })
)
app.use(passport.initialize())
app.use(passport.session())

// The location of the client/server code

// const staticPath = process.env.ENV === "production" ? "build" : "build"

// console.log(staticPath)
// console.log(path.resolve("/home/node/app/build"))

let staticPath =
  process.env.ENV === "production"
    ? "/home/node/app/build"
    : path.resolve("build")

app.use(express.static(staticPath))

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  res.setHeader("Access-Control-Allow-Credentials", true)
  next()
})

// base path routes
app.use("/register", register)
app.use("/login", login)
app.use("/dashboard", dashboard)
app.use("/welcome", welcome)
// All routes will point here at '*', TODO: Set up error handling routes
app.use(logErrors)
app.use(errorHandler)

app.get("*", renderer)

// function to start production server
export const startProd = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      ...MONGO_OPTIONS,
    })

    httpServer.listen(HTTPPORT, () => {
      console.log(`Now listening on port ${HTTPPORT}...`)
    })
    httpsServer.listen(HTTPSPORT, () => {
      console.log(`Now listening on port ${HTTPSPORT}...`)
    })
  } catch (e) {
    console.error(e)
  }
}

// function to start development server
export const startDev = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      ...MONGO_OPTIONS,
    })

    app.listen(HTTPPORT, () => {
      console.log(`Listening on port ${HTTPPORT}...`)
    })
  } catch (e) {
    console.error(e)
  }
}
