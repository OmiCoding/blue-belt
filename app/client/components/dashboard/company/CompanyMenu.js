import React, { forwardRef, useState } from "react"

import { Link } from "react-router-dom"

import { DashboardMenu } from "../../../styles/dashboard/general/NavigationStyles"
import {
  ItemWrapper,
  MenuItem,
} from "../../../styles/dashboard/general/NavigationStyles"

const CompanyMenu = ({ active, device, handleChoice, username }, ref) => {
  const [state, setState] = useState({
    companyMenuArr: [
      ["Settings", "fas fa-cog", 1],
      ["Profile", "far fa-user-circle", 2],
      ["Postings", "fas fa-clipboard-list", 3],
      ["Network", "fas fa-user-friends", 4],
    ],
  })

  const { companyMenuArr } = state

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
        {companyMenuArr.map((elem, ind) => {
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
                    to={`/dashboard/company/${username}/${elem[0].toLowerCase()}`}
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
                  <button onClick={() => handleChoice(elem[0])} />
                  <Link
                    to={`/dashboard/company/${username}/${elem[0].toLowerCase()}`}
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
                  to={`/dashboard/company/${username}/${elem[0].toLowerCase()}`}
                />
              </MenuItem>
            )
          }
        })}
      </ItemWrapper>
    </DashboardMenu>
  )
}

const ForwardCompanyMenu = forwardRef(CompanyMenu)

export default ForwardCompanyMenu
