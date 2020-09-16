import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const PostingsContainer = styled("section")`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #fcfcfc;
  overflow: hidden;
`

export const PostingsMain = styled("div")`
  height: min-content;
  width: 100%;
  max-width: 1920px;
  overflow-y: auto;

  ${mq("tiny", "min")} {
    margin-top: 136px;
  }

  ${mq("tablet", "min")} {
    margin-top: 80px;
  }
`

export const ButtonWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const PostingsButton = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "DM Sans", sans-serif;
  padding: 0.75rem 1.5rem;
  background-color: #ff6100;
  color: #fcfcfc;
  margin: 2rem auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 0;

  i {
    margin-left: 0.5rem;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: -90px;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    background-color: #fc8135;
    border-radius: 50%;
    transform: scale(0);
    transform-origin: center;
    transition: all 400ms ease;
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1);
  }
`

export const Border = styled("div")`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #ff6100;
  transform-origin: center;
  transform: scaleX(0);

  &.border-appear,
  &.border-enter {
    transform: scaleX(0);
  }

  &.border-appear-active,
  &.border-enter-active {
    transform: scaleX(1);
    transition: all 400ms ease;
  }
  &.border-appear-done,
  &.border-enter-done {
    transform: scaleX(1);
  }
`

export const ListWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
`
