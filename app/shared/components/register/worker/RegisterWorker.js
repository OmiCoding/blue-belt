import React, { useContext } from "react"
import { useHistory } from "react-router-dom"

import AppContext from "../../../context/globalContext/AppContext"
import RegisterContext from "../../../context/registerContext/RegisterContext"

import SectionOne from "./SectionOne"
import SectionTwo from "./SectionTwo"
import SectionThree from "./SectionThree"
import SectionFour from "./SectionFour"
import RegisterLoad from "../RegisterLoad"

const RegisterWorker = () => {
  // In the future add email confirmation

  const appContext = useContext(AppContext)
  const registerContext = useContext(RegisterContext)

  const { authenticated } = appContext
  const { sections, index, verify } = registerContext

  if (authenticated === true) {
    const history = useHistory()
    history.push("/dashboard")
  }

  return verify ? (
    <RegisterLoad />
  ) : (
    <>
      {sections
        .filter((elem, ind) => {
          if (index === ind) {
            return true
          } else {
            return false
          }
        })
        .map((elem, ind) => {
          if (index === 0) {
            return <SectionOne key={ind} desc={elem[0]} active={elem[1]} />
          } else if (index === 1) {
            return <SectionTwo key={ind} desc={elem[0]} active={elem[1]} />
          } else if (index === 2) {
            return <SectionThree key={ind} desc={elem[0]} active={elem[1]} />
          } else if (index === 3) {
            return <SectionFour key={ind} desc={elem[0]} active={elem[1]} />
          } else if (index > 3) {
            return null
          }
        })}
    </>
  )
}

export default RegisterWorker
