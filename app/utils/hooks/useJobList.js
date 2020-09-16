import { useEffect } from "react"
import querystring from "query-string"
import { useLocation } from "react-router-dom"
import axios from "axios"

const useJobList = (fetch, init, setState, endpoint) => {
  let location = useLocation()
  useEffect(() => {
    let query
    if (location.search.length === 0) {
      query = {}
    } else {
      query = querystring.parse(location.search)
    }

    if (init === false && fetch === true) {
      axios({
        method: "get",
        url: `/dashboard/${endpoint}`,
        baseURL: "https://blubelt.com/",
        params: query,
      })
        .then((res) => {
          return res.data
        })
        .then((data) => {
          if (data.length === 0) {
            return
          }
          setState((prevState) => {
            if (endpoint === "jobpostings") {
              return {
                ...prevState,
                list: [...data.list],
                pathname: data.pathname,
                fetch: false,
              }
            } else if (endpoint === "jobpost") {
              return {
                ...prevState,
                title: data.title,
                location: data.location,
                companyName: data.companyName,
                jobType: data.jobType,
                salary: data.salary,
                body: data.body,
              }
            }
          })
        })
        .catch((err) => {
          console.error(err)
        })
    }
    return () => {}
  }, [fetch, init, endpoint, location])
}

export default useJobList
