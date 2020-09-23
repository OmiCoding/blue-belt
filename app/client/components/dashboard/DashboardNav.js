import React from "react"
import loadable from "@loadable/component"
import { Link } from "react-router-dom"
import {
  NavContainer,
  NavHeader,
  NavItemWrapper,
} from "../../styles/dashboard/general/NavigationStyles"

import { DesktopBndryWrapper } from "../../styles/general/GeneralStyles"

import ShowMenu from "./ShowMenu"

import NotificationBell from "./NotificationBell"
const AccButton = loadable(() => import("./AccButton"))

const DashboardNav = ({ activate, handleMenu }) => {
  return (
    <NavContainer>
      <DesktopBndryWrapper>
        <NavItemWrapper>
          <ShowMenu activate={activate} handleMenu={handleMenu} />
          <NavHeader>
            <h1>blubelt</h1>
            <Link to={"/"} />
          </NavHeader>
        </NavItemWrapper>
        <NavItemWrapper>
          <NotificationBell />
          <AccButton />
        </NavItemWrapper>
      </DesktopBndryWrapper>
    </NavContainer>
  )
}

export default DashboardNav
