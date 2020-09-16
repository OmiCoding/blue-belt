import express from "express"
import {
  registerCompany,
  registerWorker,
  registerRender,
} from "../../controllers"
import {
  validRegisterCompany,
  validRegisterWorker,
  checkEmail,
  checkPhone,
  checkUser,
} from "../../middleware/auth"
import { redirectAcc } from "../../middleware/redirects"

const router = express.Router()

/*
  route: /register
  Method: POST
  Registering new user
*/

router.get("/", [redirectAcc], registerRender)
// TODO: make a special case for guests to prevent them from accessing this endpoint this unless registerting. Hint: use session cookie
// router.get("/loading", [redirectUser], registerRender)
router.post(
  "/worker",
  [redirectAcc, validRegisterWorker, checkEmail, checkUser, checkPhone],
  registerWorker
)

router.post(
  "/company",
  [redirectAcc, validRegisterCompany, checkEmail, checkUser, checkPhone],
  registerCompany
)

export default router
