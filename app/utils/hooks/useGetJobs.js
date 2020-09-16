import { useEffect } from "react"
import querystring from "query-string"
import { useLocation } from "react-router-dom"
import axios from "axios"

const useGetJobs = (id, init, fetch, setState) => {
  let location = useLocation()
  useEffect(() => {
    let query = {
      ...querystring.parse(location.search),
    }

    if (init === false && fetch === true) {
      axios({
        method: "post",
        url: "/dashboard/jobdetails",
        baseURL: "https://blubelt.com/",
        data: {
          ...query,
          id: id,
        },
      })
        .then((res) => {
          return res.data
        })
        .then((data) => {
          setState((prevState) => {
            return {
              ...prevState,
              companyName: data.companyName,
              title: data.title,
              location: data.location,
              body: data.body,
              salary: data.salary,
              jobType: data.jobType,
            }
          })
        })
        .catch((err) => {
          console.error(err)
        })
    }

    return () => {}
  }, [init, fetch, location])
}

export default useGetJobs
