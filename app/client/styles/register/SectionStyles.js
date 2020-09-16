import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

export const SectionWrapper = styled("div")`
  width: 100%;
  opacity: 0;

  &.section-enter,
  &.section-appear {
    opacity: 0;
  }

  &.section-enter-active,
  &.section-appear-active {
    opacity: 1;
    transition: opacity 300ms ease;
  }

  &.section-enter-done,
  &.section-appear-done {
    opacity: 1;
  }

  &.section-exit {
    opacity: 1;
  }

  &.section-exit-active {
    opacity: 0;
    transition opacity 300ms ease;
  }
`

export const RegisterForm = styled("form")`
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    overflow-x: visible;
  }

  ${mq("desktopS", "min")} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    min-width: 600px;
  }
`

export const InputDivision = styled("div")`
  display: flex;
  justify-content: flex-start;
  ${mq("tiny", "min")} {
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    padding: 0 1rem;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    align-items: center;
  }
`

export const Division = styled("div")`
  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 45%;
    margin-right: 1rem;
  }

  ${mq("desktopS", "min")} {
    width: 50%;
  }
`

export const SelectWrapper = styled("div")`
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  position: relative;

  ${mq("tiny", "min")} {
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 100%;
  }
`

// border-bottom: solid 0.1rem rgba(0, 0, 0, 0.2);

// border-left: solid 0.1rem rgba(0, 0, 0, 0.2)

export const Select = styled("div")`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 50px;
  background-color: #f7f7f7;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: solid 0.1rem rgba(0, 0, 0, 0.2);
  border-top: solid 0.1rem rgba(0, 0, 0, 0.2);

  h4 {
    width: 100%;
    font-size: 1rem;
    pointer-events: none;
    transition: all 400ms ease;  
  }
  div {
    position absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    height: 100%;
    width: 50px;
    pointer-events: none;
    i {
      border-style: solid;
      border-width: 0 2px 2px 0;
      display: inline-block;
      padding: 0.5rem;
      transition: all 400ms ease;
    }
  }


  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  ${mq("tiny", "min")} {
    h4 {
      width: auto;
      padding-left: 0.3rem;
    }
  }
`

export const OptionWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 0;
  opacity: 0;
  background-color: #f7f7f7;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  overflow-y: scroll;

  &.select-appear,
  &.select-enter {
    height: 0;
    opacity: 0;
  }

  &.select-appear-active,
  &.select-enter-active {
    height: 150px;
    opacity: 1;
    transition: all 400ms ease;
  }

  &.select-appear-done,
  &.enter-done {
    height: 150px;
    opacity: 1;
  }

  &.select-exit {
    height: 150px;
    opacity: 1;
  }

  &.select-exit-active {
    height: 0;
    opacity: 0;
    transition: all 400ms ease;
  }

  &.select-exit-done {
    height: 0;
    opacity: 0;
  }
`

export const Option = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;

  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-botttom: 1px solid rgba(0, 0, 0, 0.2);

    &:hover > label {
      color: #f76918;
    }

    label {
      position: absolute;
      top: 10px;
      left: 1.5rem;
      display: block;
      font-size: 1.1rem;
      color: #888;
      pointer-events: none;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
    }
  }
`

export const GenInputContainer = styled("div")`
  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 0 1rem;
    width: 100%;
  }

  ${mq("tablet", "min")} {
    width: 70%;
  }

  ${mq("desktopS", "min")} {
    width: 60%;
  }
`

export const DOBContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  div {
    display: flex;
    div {
      position: relative;
      margin-right: 1rem;
      label {
        position: absolute;
        top: 10px;
        left: 10%;
        padding: 0 0.5rem;
        font-family: "DM Sans", sans-serif;
        font-size: 1.2rem;
        color: #888;
        pointer-events: none;
        transition: all 200ms ease;
        background-color: transparent;
      }
    }
  }

  ${mq("tiny", "min")} {
    width: 100%;
    padding-left: 1rem;
  }

  ${mq("tablet", "min")} {
    width: 70%;
    padding: 0rem 1rem;
  }

  ${mq("desktopS", "min")} {
    width: 60%;
  }
`

export const LabelHeader = styled("div")`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  opacity: 1;

  h4 {
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    color: #34adf1;
    margin-right: 0.5rem;
  }
`

export const InputSm = styled("input")`
  width: 70px;
  height: 40px;
  overflow: visible;

  padding-left: 1rem;
  font-size: 1.1rem;
  outline: solid 0.1rem rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
  cursor: text;

  &:focus,
  &:valid {
    outline: solid 0.2rem #34adf1;
    background-color: #fcfcfc;
  }

  &:focus ~ label,
  &:valid ~ label {
    color: #34adf1;
    top: -10px;
    font-size: 1rem;
    background-color: #fcfcfc;
  }
`

export const InputMed = styled("input")`
  width: 100px;
  height: 40px;
  overflow: visible;

  padding-left: 1rem;
  outline: solid 0.1rem rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  cursor: text;

  &:focus,
  &:valid {
    outline: solid 0.2rem #34adf1;
    background-color: #fcfcfc;
  }

  &:focus ~ label,
  &:valid ~ label {
    color: #34adf1;
    top: -10px;
    font-size: 1rem;
    background-color: #fcfcfc;
  }
`

export const RadioContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  overflow-x: visible;

  h4 {
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    color: #34adf1;
    margin-right: 0.5rem;
  }

  ${mq("tiny", "min")} {
    width: 100%;
    padding: 0 1rem;
  }
`

export const RadioWrapper = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 0.5rem;
  overflow-x: visible;

  div {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow-x: visible;
  }

  ${mq("tiny", "min")} {
    justify-content: flex-start;
    flex-direction: column;
    div {
      width: 100%;
    }
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    div {
      width: 50%;
    }
  }
`

export const RadioLeft = styled("label")`
  display: flex;
  position: relative;
  font-size: 1.2rem;
  padding-right: 1rem;
  z-index: 0;
  overflow-x: visible;
  margin-right: 1.5rem;
  overflow-y: hidden;
  pointer-events: none;
`
export const RadioRight = styled("label")`
  display: flex;
  position: relative;
  font-size: 1.2rem;
  padding-right: 1rem;
  z-index: 0;
  overflow-x: visible;
  margin-left: 1.5rem;
  overflow-y: hidden;
  width: auto;
  pointer-events: none;
`

export const RadioDesign = styled("span")`
  display: inline-block;
  position: relative;
  width: 25px;
  height: 25px;
  margin-left: 0.5rem;
  background-color: #f7f7f7;
  pointer-events: none;
  border-radius: 50%;
  transition: all 200ms ease;
  border: 1px solid rgba(0, 0, 0, 0.2);
  z-index: 0;
  input {
    position: absolute;
    top: 0;
    left: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    opacity: 0;
    pointer-events: auto;
  }
  span {
    position: absolute;
    left: 1px;
    top: 1.75px;
    width: 10px;
    height: 10px;
    transform: translate(50%, 50%);
    border-radius: 50%;
    background-color: #fcfcfc;
    transition: all 300ms ease;
    z-index: 0;
    pointer-events: none;
  }
`

export const OptionButton = styled("div")`
  ${mq("tiny", "min")} {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: flex-end;
    height: 50px;
    margin: 1.5rem 0;

    h3 {
      font-family: "DM Sans", sans-serif;
      margin-left: 0.5rem;
    }

    div {
      position: relative;
      width: 40px;
      height: 40px;
    }

    button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  ${mq("tablet", "min")} {
    margin: 0;
  }
`

export const GenderContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 1rem;
  transition: all 300ms ease;

  textarea {
    &:focus {
      height: 80px;
    }
  }

  ${mq("tiny", "min")} {
    width: 100%;
    margin-top: 1rem;
  }

  ${mq("tablet", "min")} {
    width: 70%;
  }
`

export const PhoneContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

export const DecorativeBar = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 3px;
  background-color: #34adf1;
  transform: scaleX(0);
  transform-origin: left;

  &.deco-enter,
  &.deco-appear {
    transform: scaleX(0);
  }

  &.deco-enter-active,
  &.deco-appear-active {
    transform: scaleX(1);
    transition: transform 600ms ease;
  }

  &.deco-enter-done,
  &.deco-appear-done {
    transform: scaleX(1);
  }

  &.deco-exit {
    transform: scaleX(1);
    transition: transform 600ms ease;
  }

  &.deco-exit-active {
    transform: scaleX(0);
  }
`

export const SectionButton = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-right: 1rem;
  align-self: flex-end;
  border-radius: 50%;
  1000ms ease 1 pause;
  z-index: 0;
  overflow: hidden;
  background-color: #ddd;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${mq("tiny", "min")} {
    margin-top: 2rem;
  }

  ${mq("tablet", "min")} {
    margin-top: 1rem;
  }
`

export const RegisterButton = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  margin-top: 0.5rem;

  button {
    width: 30%;
    height: 100%;
    font-size: 1.2rem;
    font-family: "DM Sans", sans-serif;
  }
`

export const ArrowBody = styled("div")`
  width: 15px;
  height: 5px;
`

export const ArrowHead = styled("div")`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
`

export const Circle = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  transform: scale(0)
  transform-origin: center;
  border-radius: 50%;
  z-index: -1;
  transition: all 300ms ease;
  background-color: #f76918;
`
export const PostBar = styled("div")`
  width: 12px;
  height: 4px;
  margin: 0 0.5rem;
  transform: scaleX(0);
  background-color: #34adf1;

  &.post-appear,
  &.post-enter {
    transform: scaleX(0);
  }

  &.post-appear-active,
  &.post-enter-active {
    transform: scaleX(1);
    transition: all 400ms ease;
  }

  &.post-appear-done,
  &.post-enter-done {
    transform: scaleX(1);
    transition: all 400ms ease;
  }

  &.post-exit {
    transform: scaleX(1);
  }
  &.post-exit-active {
    transform: scaleX(0);
    transition: all 400ms ease;
  }
`
