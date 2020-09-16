import express from "express"
import {
  workerDashboard,
  companyDashboard,
  getAccDetails,
  auth,
  getUsername,
  getJobPostings,
  getJobPost,
  getJobDetails,
} from "../../controllers"
import {
  redirectGuest,
  redirectCompany,
  redirectWorker,
} from "../../middleware/redirects"

import { checkAuth } from "../../middleware"
import { jobs, jobSearch, postings, jobPost } from "../../controllers"

const router = express.Router()

router.get("/worker/:worker", [redirectGuest, redirectCompany], workerDashboard)

router.get(
  "/company/:company",
  [redirectGuest, redirectWorker],
  companyDashboard
)

router.get("/worker/:worker/jobs", [redirectGuest, redirectCompany], jobSearch)

router.get(
  "/worker/:worker/jobs/jobpost/:id",
  [redirectGuest, redirectCompany],
  jobSearch
)

router.get(
  "/company/:company/postings",
  [redirectGuest, redirectWorker],
  postings
)

router.get(
  "/company/:company/postings/jobpost/:id",
  [redirectGuest, redirectWorker],
  postings
)

router.get("/auth", [checkAuth], auth)

router.get("/acc", [checkAuth], getAccDetails)

router.get("/acc/username", [checkAuth], getUsername)

router.get("/jobpostings", [checkAuth], getJobPostings)

router.get("/jobpost", [checkAuth], getJobPost)

// Posts

router.post("/jobdetails", [checkAuth], getJobDetails)
router.post("/jobs", [redirectGuest, redirectCompany], jobs)
router.post(
  "/company/:company/postings",
  [redirectGuest, redirectWorker],
  jobPost
)

export default router
