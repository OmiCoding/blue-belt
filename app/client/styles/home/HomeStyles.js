import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

// import peopleSVG from "../../assets/bar-people.svg"
// import landscape from "../../assets/landscape.svg"
// import buildings from "../../assets/buildings.svg"
// import sunset from "../../assets/sunset.svg"

export const HomeWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow-x: hidden;
  margin: 0 auto;
  color: #fcfcfc;
`

export const MaxContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  overflow-x: hidden;
  margin: 0 auto;
  z-index: 4;
`

export const BgSVGWrapper = styled("div")`
  position: absolute;
  overflow-y: hidden;
  background-repeat: no-repeat;
`

export const NavBarWrapper = styled("div")`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1920px;
  transform: translateX(-50px);
  opacity: 0;
  z-index: 4;

  &.nav-appear,
  &.nav-enter {
    transform: translateX(-50px);
    opacity: 0;
  }

  &.nav-appear-active,
  &.nav-enter-active {
    transform: translateX(0);
    opacity: 1;
    transition: all 600ms ease;
  }

  &.nav-appear-done,
  &.nav-enter-done {
    transform: translateX(0);
    opacity: 1;
  }

  ${mq("tiny", "min")} {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
  }

  ${mq("tablet", "min")} {
    justify-content: space-between;
    flex-direction: row;
    height: 120px;
    padding: 0 3rem;
    margin: 0 auto;
  }

  ${mq("desktopS", "min")} {
    padding: 0 8rem;
    margin: 0 auto;
  }
`

export const NavItems = styled("div")`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;

  a {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${mq("tiny", "min")} {
    flex-direction: column;
    margin-top: 1.2rem;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    margin: 0;
  }
`

export const LogoWrapper = styled("div")`
  width: 100px;
  height: 100px;
  overflow: hidden;
`

export const Logo = styled("img")`
  width: 100%;
  height: 100%;
`

export const LogoHeading = styled("h1")`
  font-size: 2.5rem;
  font-family: "MuseoModerno", sans-serif;
  margin-left: 0.5rem;
`

export const NavLinks = styled("ul")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "DM Sans", sans-serif;

  li {
    position: relative;
    color: #fcfcfc;
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    margin: 0 1rem;
  }

  ${mq("tiny", "min")} {
  }
`

export const SignBtn = styled("li")`
  position: relative;
  background-color: #fcfcfc;
  font-size: 1.1rem;
  color: #371318 !important;

  &:hover {
    background-color: #ffc900;
    color: #fcfcfc;
  }

  ${mq("tiny", "min")} {
    font-size: 1rem;
    padding: 0.5rem 1.1rem;
  }

  ${mq("tablet", "min")} {
    font-size: 1.1rem;
    padding: 0.75rem 1.5rem;
  }
`
