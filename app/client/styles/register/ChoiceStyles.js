import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

import { ReactComponent as emplSVG } from "../../assets/icon-opti.svg"

export const ChoiceContainer = styled("div")`
  display: flex;
  opacity: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;


  &.choice-enter,
  &.choice-appear {
    opacity: 0;
  }

  &.choice-enter-active,
  &.choice-appear-active {
    opacity: 1;
    transition: opacity 600ms ease;
  }

  &.choice-enter-done,
  &.choice-appear-done {
    opacity: 1;
  }

  &.choice-exit {
    opacity: 1;
  }

  &.choice-exit-active {
    opacity: 0;
    transition: opacity: 600ms ease;
  }

`
export const CardContainer = styled("div")`
  display: flex;
  font-family: "Roboto", sans-serif;
  width: 100%;
  justify-content: center;
  align-items: center;

  ${mq("tiny", "min")} {
    flex-direction: column;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
  }
`

export const ChoiceCard = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin-bottom: 0.75rem;
  border-radius: 15px;
  background-color: #fcfcfc;
  transition: all 200ms ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: -10px 10px 15px #cdcdcd;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: none;
  }

  h3 {
    background-color: #fcfcfc;
    width: 100%;
    color: #f76918;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 1.75rem;
    text-align: center;
    transition: all 200ms ease;
  }

  ${mq("iphoneSE", "min")} {
    width: 285px;
    height: 225px;
  }

  ${mq("phoneLg", "min")} {
    width: 375px;
    height: 300px;
  }

  ${mq("tablet", "min")} {
    width: 320px;
    height: 390px;
    margin: 1rem 1.2rem;
  }
`

export const ChoiceSVG = styled(emplSVG)`
  width: 320px;
  height: 320px;

  g {
    fill: "fcfcfc";
  }
`

// export const ChoiceSVG2 = styled(employeeSVG)``
