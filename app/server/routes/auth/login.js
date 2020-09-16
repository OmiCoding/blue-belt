import { Router } from "express"
import { loginWorker, loginCompany, renderer } from "../../controllers"

import { validLoginUser } from "../../middleware/auth"

import { redirectAcc } from "../../middleware/redirects"

const router = Router()

router.get("/", [redirectAcc], renderer)

router.post("/worker", [validLoginUser], loginWorker)
router.post("/company", [validLoginUser], loginCompany)

export default router
