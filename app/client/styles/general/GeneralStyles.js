import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

export const DeviceLayout = styled("div")`
  position: relative;
  width: 100%;
  margin: auto;
  max-width: 1920px;
  z-index: 0;
  overflow-y: scroll !important;

  ${mq("tiny", "min")} {
    height: 100%;
  }

  ${mq("desktopS", "min")} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    height: 100%;
  }
`

export const MainWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  margin: auto;
  max-width: 1920px;
  z-index: 0;
  overflow-y: auto;
`

export const FlexWrapper = styled("div")`
  display: flex;
`
export const FlexCenterWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const InputWrapper = styled("div")`
  padding-top: 0.5rem;
  margin-bottom: 0.5rem;
  width: 100%;
  position: relative;
  overflow: visible;

  label {
    position: absolute;
    top: 15px;
    left: 8%;
    padding: 0 0.5rem;
    font-family: "DM Sans", sans-serif;
    font-size: 1.1rem;
    color: #888;
    pointer-events: none;
    transition: all 200ms ease;
    background-color: transparent;
  }

  input,
  textarea {
    outline: solid 0.1rem rgba(0, 0, 0, 0.2);
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    cursor: text;
    padding-left: 1rem;

    transition: all 200ms ease;

    &:focus,
    &:valid {
      outline: solid 0.2rem #34adf1;
      background-color: #fcfcfc;
    }

    &:focus ~ label,
    &:valid ~ label {
      color: #34adf1;
      top: -7px;
      font-size: 1rem;
      background-color: #fcfcfc;
    }

    &:focus ~ div,
    &:valid ~ div {
      top: 0;
      background-color: #fcfcfc;
      right: 7%;
    }

    &:focus ~ div > div,
    &:valid ~ div > div {
      background-color: #34adf1;
      transform: translateX(0);
      margin: 0 0.3rem;
      transition: transform 200ms 400ms ease, margin 200ms 400ms ease;
    }

    &:focus ~ div > span {
      border-top: 6px solid transparent;
      border-left: 12px solid #34adf1;
      border-bottom: 6px solid transparent;
    }
  }

  textarea {
    padding-top: 0.3rem;
    height: 50px;
  }
`

export const DesktopBndryWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1920px;
  margin: auto;

  ${mq("tiny", "min")} {
    flex-direction: column;
    height: auto;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    height: 100%;
  }
`

export const ModalWrapper = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 4;
`

export const ModalExitBtn = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  div {
    position: relative;
    width: 70px;
    height: 70px;

    &:hover::after,
    &:hover::before {
      background-color: #ff6100;
    }

    &::after,
    &::before {
      position: absolute;
      content: "";
      top: 17.5px;
      left: 35px;
      bottom: 0;
      height: 33px;
      width: 2px;
      background-color: rgba(0, 0, 0, 0.1);
    }

    &::before {
      transform: rotate(45deg);
    }

    &::after {
      transform: rotate(-45deg);
    }

    button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export const OptionWrapper = styled("div")`
  width: 100%;
  height: min-content;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const OptnItem = styled("div")`
  position: relative;
  width: 100%;
  padding: 0.3rem;

  span {
    display: inline-block;
    font-size: 1.1rem;
    font-family: "DM Sans", sans-serif;
    color: #777;
    width: 100%;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    span {
      color: #ff6100;
    }
  }
`

export const DotContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 5%;
  transition: all 200ms ease;
  pointer-events: none;

  span {
    display: block;
    width: 0;
    height: 0;
    margin-left: 0.3rem;
    border-bottom: 12px solid #888;
    border-right: 12px solid transparent;
    transition: all 200ms ease;
  }

  div {
    margin: 0;
    width: 12px;
    height: 12px;
    background-color: transparent;
    border-radius: 50%;
  }
`

export const Dot1 = styled("div")``
export const Dot2 = styled("div")`
  transform: translateX(-12px);
`
export const Dot3 = styled("div")`
  transform: translateX(-24px);
`
