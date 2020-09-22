import { startProd, startDev } from "./server"

process.env.ENV === "production" ? startProd() : startDev()
