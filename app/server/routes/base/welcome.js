import express from "express"

import { registerRender } from "../../controllers"

import { confirmEmail } from "../../middleware"

const router = express.Router()

router.get("/", [confirmEmail], registerRender)

export default router
