import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"
import orent from "../../../utils/functions/orientation"

// import SillhouetteSVG from "../../assets/sillhouette-ld-opti.svg"

export const RegisterLayout = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  z-index: 0;

  ${mq("tiny", "min")} {
    background-color: #ea6c42;
  }

  ${mq("tablet", "min")} {
    overflow-y: auto;
  }

  ${mq("desktopS", "min")} {
    overflow: hidden;
    background-color: transparent;
  }
`

export const SVGContainer = styled("div")`
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
    position: absolute;
    overflow-y: hidden;
    top: -1px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
`

// export const RegisterSillhouette = styled(SillhouetteSVG)`
//   ${mq("tiny", "min")} {
//     display: none;
//   }

//   ${mq("desktopS", "min")} {
//     display: block;
//   }
// `

export const RegisterFormContainer = styled("div")`
  background-color: #fcfcfc;
  transform: translateY(-40px);
  opacity: 0;
  transition: all 300ms ease;
  overflow-x: visible;

  ${mq("tiny", "min")} {
    display: block;
    height: 100%;
    padding: 1rem;
    overflow-y: auto;
  }

  ${mq("small", "min")} {
    padding: 1rem 1.2rem;
    min-width: 350px;
  }

  ${mq("phoneMed", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fcfcfc;
    height: auto;
    width: 750px;
    padding: 0rem 2rem 2rem 2rem;
    margin: auto;
    box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.2);
    overflow-y: visble;
  }

  ${mq("tabletLg", "min")} {
    display: block;
    height: auto;
    width: 787px;
  }

  &.form-appear,
  &.form-enter {
    transform: translateY(-40px);
    opacity: 0;
  }

  &.form-appear-active,
  &.form-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 300ms ease;
  }

  &.form-appear-done,
  &.form-enter-done {
    transform: translateY(0);
    opacity: 1;
    transition: all 300ms ease;
  }

  &.form-exit {
    transform: translateY(0);
    opacity: 1;
  }

  &.form-exit-active {
    transform: translateY(-40px);
    opacity: 0;
    transition: all 300ms ease;
  }
`

export const RegisterHeader = styled("h1")`
  font-family: "MuseoModerno", sans-serif;
  font-weight: 900;
  color: #34adf1;
  text-align: center;

  ${mq("tiny", "min")} {
    width: 100%;
    font-size: 1.8rem;
    margin-bottom: 1rem;
  }

  ${mq("tablet", "min")} {
    font-size: 2rem;
    margin: 1rem 0;
  }

  ${mq("desktopS", "min")} {
    font-size: 2.5rem;
  }
`

export const RegisterDescription = styled("h2")`
  font-family: "DM Sans", sans-serif;
  color: #f76918;
  padding: 0 1rem;
  margin-bottom: 1.5rem;

  ${mq("tiny", "min")} {
    font-size: 1.3rem;
    width: 100%;
    margin-bottom: 1.5rem;
  }

  ${mq("desktopS", "min")} {
    font-size: 1.3rem;
  }
`
