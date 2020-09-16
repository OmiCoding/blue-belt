import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const FormWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 1rem 0;
  padding-bottom: 1rem;
`

export const FormBorder = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  transform-origin: center;
  transform: scaleX(0);
  width: 100%;
  height: 1px;
  background-color: #ff6100;

  &.border-appear,
  &.border-enter {
    transform: scaleX(0);
  }

  &.border-appear-active,
  &.border-enter-active {
    transform: scaleX(1);
    transition: all 1000ms ease;
  }

  &.border-appear-done,
  &.border-enter-done {
    transform: scaleX(1);
  }
`

export const Form = styled("form")`
  display: flex;
  align-items: center;
  margin: auto;
  ${mq("tiny", "min")} {
    flex-direction: column;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
  }
`

let pulse = keyframes`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
`

export const InputWrapper = styled("div")`
  position: relative;
  display: flex;
  height: 50px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 25px;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    height: 100%;
    background-color: transparent;
    overflow: hidden;
    input {
      width: 100%;
      cursor: text;
      padding-left: 1rem;
      font-size: 1.1rem;
      background-color: transparent;
      outline: unset;
    }

    span {
      position: absolute;
      display: inline-block;
      font-size: 1rem;
      top: 30%;
      left: 10%;
      color: rgba(0, 0, 0, 0.2);
      background-color: transparent;
      pointer-events: none;
      opacity: 0;
    }

    & > input:focus ~ span {
      opacity: 0;
    }
  }

  label {
    display: inline-block;
    margin-left: 1rem;
    color: #ff6100;
    opacity: 0;
    animation: ${pulse} 300ms ease 600ms 1;
    i {
      font-size: 1.1rem;
      margin-right: 0.5rem;
    }
  }

  ${mq("tiny", "min")} {
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 1rem;
    &.input-appear,
    &.input-enter {
      width: 100px;
      div {
        span {
          opacity: 0;
        }
      }
      label {
        opacity: 0;
      }
    }

    &.input-appear-active,
    &.input-enter-active {
      width: 250px;
      div {
        span {
          opacity: 1;
          transition: all 1000ms ease;
        }
      }
      label {
        opacity: 1;
        transition: all 1000ms ease;
      }
      transition: all 1000ms ease;
    }

    &.input-appear-done,
    &.input-enter-done {
      width: 250px;
      div {
        span {
          opacity: 1;
        }
      }
      label {
        opacity: 1;
      }
    }
  }

  ${mq("tablet", "min")} {
    justify-content: flex-end;
    align-items: center;
    flex-direction: row-reverse;
    margin-top: 0;
    margin-right: 1rem;
    &.input-appear,
    &.input-enter {
      width: 100px;
      div {
        span {
          opacity: 0;
        }
      }
      label {
        opacity: 0;
      }
    }

    &.input-appear-active,
    &.input-enter-active {
      width: 250px;
      div {
        span {
          opacity: 1;
          transition: all 1000ms ease;
        }
      }
      label {
        opacity: 1;
        transition: all 1000ms ease;
      }
      transition: all 1000ms ease;
    }

    &.input-appear-done,
    &.input-enter-done {
      width: 250px;
      div {
        span {
          opacity: 1;
        }
      }
      label {
        opacity: 1;
      }
    }
  }

  ${mq("desktopS", "min")} {
    &.input-appear,
    &.input-enter {
      width: 100px;
      div {
        span {
          opacity: 0;
        }
      }
      label {
        opacity: 0;
      }
    }

    &.input-appear-active,
    &.input-enter-active {
      width: 300px;
      div {
        span {
          opacity: 1;
          transition: all 1000ms ease;
        }
      }
      label {
        opacity: 1;
        transition: all 1000ms ease;
      }
      transition: all 1000ms ease;
    }

    &.input-appear-done,
    &.input-enter-done {
      width: 300px;
      div {
        span {
          opacity: 1;
        }
      }
      label {
        opacity: 1;
      }
    }
  }
`

export const SearchButton = styled("button")`
  background-color: #ff6100;
  color: #fcfcfc;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;

  ${mq("tiny", "min")} {
    margin: 1.2rem 0;
  }

  ${mq("tablet", "min")} {
    margin: 0;
  }
`
