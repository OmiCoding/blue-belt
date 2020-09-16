import React, { useReducer } from "react"
import PropTypes from "prop-types"
import axios from "axios"

import AccContext from "./AccContext"
import accReducer from "./accReducer"
import { GET_ACC_DETAILS, GET_USERNAME, END_INIT, GENERAL_ERROR } from "./types"

const AccProvider = ({ children }) => {
  const [state, dispatch] = useReducer(accReducer, {
    role: "",
    username: "",
    email: "",
    phone: "",
    fName: "",
    lName: "",
    companyName: "",
    city: "",
    province: "",
    career: "",
    experience: "",
    education: "",
    employed: false,
    badges: [],
    init: true,
  })

  const {
    role,
    username,
    email,
    fName,
    lName,
    companyName,
    city,
    province,
    career,
    experience,
    education,
    employed,
    init,
  } = state

  const getWorkerDetails = () => {
    axios
      .request(`/dashboard/acc`, {
        method: "get",
        headers: {
          "Content-Type": "application/json",
        },
        responseType: "json",
      })
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: GET_ACC_DETAILS, payload: { ...data } })
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        return dispatch({ type: GENERAL_ERROR })
      })
    dispatch({ type: GET_ACC_DETAILS })
  }

  const getCompanyDetails = () => {
    axios({
      method: "get",
      url: "/dashboard/acc",
      baseURL: "https://blubelt.com/",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    })
      .then((res) => res.data)
      .then((data) => {
        dispatch({ type: GET_ACC_DETAILS, payload: { ...data } })
      })
      .catch((err) => {
        return dispatch({ type: GENERAL_ERROR })
      })
  }

  const getUsername = () => {
    axios({
      method: "get",
      url: "/dashboard/acc/username",
      baseURL: "https://blubelt.com/",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    })
      .then((res) => {
        return res.data
      })
      .then((data) => {
        return dispatch({ type: GET_USERNAME, payload: { ...data } })
      })
      .catch((err) => {
        return dispatch({ type: GENERAL_ERROR })
      })
  }

  const endInit = () => {
    return dispatch({ type: END_INIT })
  }

  return (
    <AccContext.Provider
      value={{
        role,
        username,
        email,
        city,
        province,
        fName,
        lName,
        companyName,
        career,
        experience,
        education,
        employed,
        init,
        getWorkerDetails: getWorkerDetails,
        getCompanyDetails: getCompanyDetails,
        getUsername: getUsername,
        endInit: endInit,
      }}
    >
      {children}
    </AccContext.Provider>
  )
}

AccProvider.propTypes = {
  children: PropTypes.node,
}

export default AccProvider
