import {
  home,
  workerDashboard,
  companyDashboard,
  register,
  welcome,
  login,
  jobSearch,
  job,
  postings,
  post,
} from "./rootRoutes"

const routes = [
  { ...home },
  { ...workerDashboard },
  { ...companyDashboard },
  { ...register },
  { ...welcome },
  { ...login },
  { ...jobSearch },
  { ...job },
  { ...postings },
  { ...post },
  // { ...regLoad },
]

export default routes
