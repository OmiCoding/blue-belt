import React, { useCallback, useEffect, useContext } from "react"

import { useHistory } from "react-router-dom"

import RegisterContext from "../../context/registerContext/RegisterContext"

const RegisterLoad = () => {
  const registerContext = useContext(RegisterContext)

  const { select, success, registerWorker, registerCompany } = registerContext

  let history = useHistory()

  const register = useCallback(() => {
    if (select === "worker" && success === false) {
      registerWorker()
    } else if (select === "company" && success === false) {
      registerCompany()
    }

    if (success) {
      history.push("/welcome")
    }
  }, [success, select, history, registerWorker, registerCompany])

  useEffect(() => {
    register()
  }, [register])

  return <h2>We are loading here!!!!!</h2>
}

export default RegisterLoad
