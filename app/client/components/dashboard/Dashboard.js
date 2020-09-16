import React, { useEffect, useContext, useCallback } from "react"
import AppContext from "../../../shared/context/globalContext/AppContext"
import AccContext from "../../context/accContext/AccContext"

const Dashboard = () => {
  const { authenticated, role } = useContext(AppContext)

  const { username, email, getWorkerDetails, getCompanyDetails } = useContext(
    AccContext
  )

  const setUp = useCallback(() => {
    if (role === "worker") {
      getWorkerDetails()
    } else if (role === "company") {
      getCompanyDetails()
    }
  }, [getDetails, role])

  useEffect(() => {
    getDetails(role)
  }, [setUp])

  return (
    <>
      {authenticated === false ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h1>{username}</h1>
          <h1>{email}</h1>
        </div>
      )}
    </>
  )
}

export default Dashboard
