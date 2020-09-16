import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const ContactsContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #f3f3f3;

  ${mq("tiny", "min")} {
    width: 100%;
    height: auto;
  }
`

export const ContactsHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;

  span {
    display: inline-block;
    font-size: 1.5rem;
    font-family: "DM Sans", sans-serif;
    color: #ff6100;
  }

  div {
    position: relative;
    padding: 0.3rem;
    color: #ff6100;
    font-size: 1.1rem;
    font-family: "DM Sans", sans-serif;
    button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export const SliderContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 350px;
  margin: 1rem 0;
  overflow: hidden;
`

export const Slider = styled("div")`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow-x: auto;
  overflow-y: hidden;
  background-color: #f3f3f3;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const SliderItem = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  width: 250px;
  height: 350px;
  margin: 0 0.5rem;
  overflow-x: visible;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  h4 {
    width: 100%;
    font-size: 1.3rem;
    margin-bottom: 0.2rem;
    text-align: center;
    margin: 1rem 0;
    color: #ff6100;
  }

  span {
    display: inline-block;
    font-size: 1.2rem;
    text-align: center;
    width: 100%;
    margin-bottom: 0.3rem;
  }

  button {
    font-size: 1.2rem;
    margin: 0.5rem auto;
    padding: 0.5rem;
    color: #fff;
    background-color: #ff6100;
  }
`

export const SliderImg = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin: 1rem 0;
  overflow: hidden;

  img {
    border-radius: 50%;
  }
`
