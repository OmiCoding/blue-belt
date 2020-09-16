import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"
// import tools from "../../assets/tools-opti.svg"

export const LoginLayout = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;

  ${mq("tiny", "min")} {
    background-color: #ea6c42;
  }

  ${mq("tablet", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: scroll;
  }

  ${mq("desktopS", "min")} {
    background-color: transparent;
    overflow-y: hidden;
  }
`

export const SVGContainer = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopS", "min")} {
    display: block;
    overflow: visible;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
`

// export const ToolsSVG = styled(tools)``

export const LoginHeader = styled("h1")`
  font-family: "MuseoModerno", sans-serif;
  color: #34adf1;
  margin-bottom: 1.2rem;
  text-align: center;
  width: 100%;

  ${mq("tiny", "min")} {
    font-size: 1.5rem;
  }

  ${mq("tablet", "min")} {
    font-size: 2rem;
  }
`

export const Description = styled("div")`
  font-size: 1.1rem;
  text-align: center;
  margin-top: 0.5rem;
  color: #888;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 60%;
  }
`

export const Title = styled("h4")`
  font-family: "MuseoModerno", sans-serif;
  font-size: 1.2rem;
  text-align: center;
  margin: 0.3rem 0;
  color: #888;
`

export const LoginFormContainer = styled("div")`
  background-color: #fcfcfc;

  ${mq("tiny", "min")} {
    display: block;
    width: 100%;
    height: 100%;
    padding: 1rem 0.75rem;
    overflow-y: auto;
  }

  ${mq("tablet", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 550px;
    height: auto;
    margin: auto;
    overflow-y: visible;
    padding 1.2rem 1.2rem;
    box-shadow: 1px 10px 10px rgba(0, 0, 0, 0.2)
  }
`

export const LoginForm = styled("form")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const InputContainer = styled("div")`
  margin: 1.2rem 0;
  overflow: visible;
  ${mq("tiny", "min")} {
    width: 80%;
  }

  ${mq("phoneLg", "min")} {
    width: 60%;
  }

  ${mq("tablet", "min")} {
    width: 60%;
  }
`

export const LoginButton = styled("button")`
  position: relative;
  background-color: #34adf1;
  font-size: 1.1rem;
  color: #fcfcfc;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  transition: all 300ms ease;
  transform-origin: center;
  margin: 1.5rem; 0;
  overflow: hidden;
  z-index: 0;
  height: 40px;


  &::after {
    content: "";
    position: absolute;
    transform: scale(0);
    border-radius: 50%;
    width: 700px;
    height: 700px;
    margin-left: 0;
    margin-right: 0;
    top: -325px;
    left: -200px;
    right: 0;
    bottom: 350px;
    background-color: #32b5ff;
    z-index: -1;
    transition: all 300ms ease;
  }

  &:hover {
    box-shadow: 0 0 0 transparent;
  }

  &:hover::after {
    transform: scale(1);
  }

  ${mq("tiny", "min")} {
    width: 80%;
  }


  ${mq("phoneLg", "min")} {
    width: 60%;
  }

  ${mq("tablet", "min")} {
    width: 60%;
  }
`

export const RadioWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  label {
    display: block;
    position: relative;
    font-size: 1.2rem;
    padding-right: 1rem;
    overflow: visible;
    input {
      position: absolute;
      top: 0;
      right: -25px;
      cursor: pointer;
      width: 25px;
      height: 25px;
      opacity: 0;

      &:checked {
        background-color: #34adf1;
      }
      &:checked ~ span {
        background-color: #34adf1;
      }

      &:checked ~ span::after {
        opacity: 1;
      }
    }

    span {
      display: inline-block;
      position: absolute;
      top: 0;
      right: -25px;
      width: 25px;
      height: 25px;
      background-color: #f7f7f7;
      pointer-events: none;
      border-radius: 50%;
      transition: all 200ms ease;
      border: 1px solid rgba(0, 0, 0, 0.2);
      &::after {
        content: "";
        position: absolute;
        left: 1px;
        top: 1.75px;
        width: 10px;
        height: 10px;
        transform: translate(50%, 50%);
        border-radius: 50%;
        background-color: #fcfcfc;
        opacity: 0;
        transition: all 300ms ease;
      }
    }
  }

  ${mq("tiny", "min")} {
    div {
      width: 100%;
    }
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    div {
      width: 60%;
    }
  }
`

export const WorkerRadio = styled("label")`
  margin-right: 1.5rem;
`
export const CompanyRadio = styled("label")`
  margin-left: 1.5rem;
`

export const LinkContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;

  a {
    display: inline-block;
    font-size: 1rem;
    color: #34adf1;
    transition: all 300ms ease;
    margin: 0 0.4rem;
    &:hover {
      color: #32b5ff;
    }
  }

  ${mq("tiny", "min")} {
    width: 100%;
  }
  ${mq("tablet", "min")} {
    width: 60%;
  }
`

export const Circle = styled("div")`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #888;
`

export const HorizontalBar = styled("div")`
  height: 2px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 1.2rem 0;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 60%;
  }
`
