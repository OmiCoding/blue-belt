import React from "react"

import Profile from "./Profile"
import { DashboardMain } from "../../styles/dashboard/general/MainStyles"

const DashboardWrapper = (props) => {
  const { menuChoice, layout, active } = props

  return (
    <DashboardMain
      style={{
        overflowY: active ? "hidden" : "auto",
      }}
    >
      {layout
        .filter((elem) => {
          if (elem === menuChoice) {
            return true
          } else {
            return false
          }
        })
        .map((elem, ind) => {
          if (menuChoice === elem) {
            return <Profile key={ind} {...props} />
          } else {
            return null
          }
        })}
    </DashboardMain>
  )
}

export default DashboardWrapper
