import React, { forwardRef, useState } from "react"

import { Link } from "react-router-dom"

import {
  DashboardMenu,
  MenuItem,
  ItemWrapper,
} from "../../../styles/dashboard/general/NavigationStyles"

const WorkerMenu = ({ active, device, username, handleChoice }, ref) => {
  const [state, setState] = useState({
    workMenuArr: [
      ["Settings", "fas fa-cog", 1],
      ["Profile", "far fa-user-circle", 2],
      ["Jobs", "fas fa-search", 3],
      ["Network", "fas fa-user-friends", 4],
    ],
  })

  const { workMenuArr } = state

  return (
    <DashboardMenu
      ref={ref}
      style={{
        height:
          device === "mobile"
            ? active
              ? "calc(100% - 80px)"
              : "0"
            : "calc(100% - 80px)",
        width: device === "desktop" ? (active ? "100px" : "0") : "100%",
        opacity: active ? "1" : "0",
      }}
    >
      <ItemWrapper>
        {workMenuArr.map((elem, ind) => {
          if (device === "mobile") {
            if (elem[2] % 3 === 0) {
              return (
                <MenuItem
                  key={ind}
                  style={{
                    width: device === "mobile" ? "33.4%" : "100%",
                  }}
                >
                  <span>
                    <i className={elem[1]} />
                  </span>
                  <h3>{elem[0]}</h3>
                  <Link
                    to={`/dashboard/worker/${username}/${elem[0].toLowerCase()}`}
                  />
                </MenuItem>
              )
            } else {
              return (
                <MenuItem key={ind}>
                  <span>
                    <i className={elem[1]} />
                  </span>
                  <h3>{elem[0]}</h3>
                  <Link
                    to={`/dashboard/worker/${username}/${elem[0].toLowerCase()}`}
                  />
                </MenuItem>
              )
            }
          } else {
            return (
              <MenuItem key={ind}>
                <span>
                  <i className={elem[1]} />
                </span>
                <h3>{elem[0]}</h3>
                <Link
                  to={`/dashboard/worker/${username}/${elem[0].toLowerCase()}`}
                />
              </MenuItem>
            )
          }
        })}
      </ItemWrapper>
    </DashboardMenu>
  )
}

const WorkerMenuForward = forwardRef(WorkerMenu)

export default WorkerMenuForward
