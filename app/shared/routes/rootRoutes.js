import loadable from "@loadable/component"

export const home = {
  path: "/",
  exact: true,
  strict: false,
  component: loadable(() => import("../components/Home")),
}

export const workerDashboard = {
  path: "/dashboard/worker/:worker",
  exact: true,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/worker/WorkerDashboard")
  ),
}

export const companyDashboard = {
  path: "/dashboard/company/:company",
  exact: true,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/company/CompanyDashboard")
  ),
}

export const jobSearch = {
  path: "/dashboard/worker/:worker/jobs",
  exact: true,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/search/JobSearch")
  ),
}

export const jobs = {
  path: "/dashboard/worker/:worker/jobs",
  exact: true,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/search/JobSearch")
  ),
}

export const job = {
  path: "/dashboard/worker/:worker/jobs/jobpost/:id",
  exact: false,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/JobPost")
  ),
}

export const postings = {
  path: "/dashboard/company/:company/postings",
  exact: true,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/postings/JobPostings")
  ),
}

export const post = {
  path: "/dashboard/company/:company/postings/jobpost/:id",
  exact: false,
  strict: false,
  component: loadable(() =>
    import("../../client/components/dashboard/JobPost")
  ),
}

// Fix the routes
export const register = {
  path: "/register",
  exact: true,
  strict: false,
  component: loadable(() => import("../components/register/Register")),
}

// export const regLoad = {
//   path: "/register/loading",
//   exact: true,
//   strict: false,
//   component: RegisterLoad,
// }

export const welcome = {
  path: "/welcome",
  exact: true,
  strict: false,
  component: loadable(() => import("../components/Welcome")),
}

export const login = {
  path: "/login",
  exact: true,
  strict: false,
  component: loadable(() => import("../components/login/Login")),
}

export const logout = {}
