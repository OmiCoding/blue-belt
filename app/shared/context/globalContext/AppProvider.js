import React, { useReducer } from "react"
import PropTypes from "prop-types"
import AppContext from "./AppContext"
import appReducer from "./appReducer"

import axios from "axios"
import { AUTH_ACCOUNT, HANDLE_CHOICE } from "./types"

const AppProvider = ({ children, context }) => {
  let paramData
  let searchData
  if (context) {
    if (Object.prototype.hasOwnProperty.call(context, "search")) {
      searchData = { ...context.search }
    }
    if (Object.prototype.hasOwnProperty.call(context, "id")) {
      params = context.id
    }
  }
  const [state, dispatch] = useReducer(appReducer, {
    authenticated: false,
    role: "guest",
    search: searchData,
    menuChoice: "",
    params: paramData,
  })

  const { authenticated, role, search, params, menuChoice } = state

  const authAccount = () => {
    axios("/dashboard/auth", {
      method: "get",
      baseURL: "http://localhost:8080/",
      headers: {
        "Content-Type": "application/json",
      },
      responseType: "json",
    })
      .then((res) => res.data)
      .then((data) => {
        return dispatch({ type: AUTH_ACCOUNT, payload: { ...data } })
      })
  }

  const handleChoice = (choice) => {
    return dispatch({ type: HANDLE_CHOICE, payload: choice })
  }

  return (
    <AppContext.Provider
      value={{
        authenticated: authenticated,
        role: role,
        authAccount: authAccount,
        search: search,
        params: params,
        menuChoice: menuChoice,
        handleChoice: handleChoice,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

AppProvider.propTypes = {
  children: PropTypes.node,
}

export default AppProvider
