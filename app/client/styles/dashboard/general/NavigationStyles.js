import { keyframes } from "@emotion/core"
import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const NavContainer = styled("nav")`
  position: absolute;
  background-color: #ff6100;
  top: 0;
  left: 0;
  color: #fff;
  z-index: 2;

  ${mq("tiny", "min")} {
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 0.5rem 0.3rem;
  }

  ${mq("tablet", "min")} {
    flex-direction: row;
    height: 80px;
    padding-right: 2rem;
  }
`

export const NavItemWrapper = styled("div")`
  display: flex;
  align-items: center;

  i {
    display: inline-block;
    font-size: 1.5rem;
  }

  ${mq("tiny", "min")} {
    justify-content: center;
    width: 100%;
    height: 60px;

    i {
      margin-right: 0;
    }
  }

  ${mq("tablet", "min")} {
    width: auto;
    height: auto;

    i {
      margin-right: 1.5rem;
    }
  }
`

export const DashboardMenu = styled("aside")`
  position: absolute;
  background-color: #ff6100;
  transition: all 300ms ease;
  z-index: 2;

  ${mq("tiny", "min")} {
    bottom: 0;
    left: 0;
  }
  ${mq("desktopS", "min")} {
    flex-direction: column;
  }
`

export const MenuButton = styled("div")`
  position: relative;
  width: 60px;
  height: 60px;
  background=color: #ff6100;
  margin-right: 1rem;

  ${mq("desktopS", "min")} {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`

export const NavHeader = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h1 {
    position: relative;
    font-family: "MuseoModerno", sans-serif;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${mq("tiny", "min")} {
    h1 {
      font-size: 2rem;
      color: #f7f7f7;
    }
  }
`

// #0074b7;

export const AccButtonWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  div.account-drop-down {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "DM Sans", sans-serif;
    font-size: 1.1rem;
    font-weight: 900;
    span {
      display: inline-block;
      border-top: 10px solid #fff;
      border-right: 5px solid transparent;
      border-left: 5px solid transparent;
      margin-left: 0.5rem;
    }
  }

  ${mq("tiny", "min")} {
    min-height: 60px;
    margin-left: 1rem;
  }
  ${mq("tablet", "min")} {
    margin-left: 0.3rem;
  }
`

export const AccImgContainer = styled("div")`
  position: relative;
  overflow: hidden;

  ${mq("tiny", "min")} {
    display: none;
    width: 0;
    height: 0;
    margin: 0;
    padding: 0;
  }

  ${mq("tablet", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin-right: 0.3rem;
    border-radius: 50%;
  }
`

export const AccImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

export const ItemWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  ${mq("tiny", "min")} {
    width: 100%;
    height: auto;
  }

  ${mq("desktopS", "min")} {
    flex-direction: column;
  }
`

export const MenuItem = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  align-self: stretch;
  padding: 1rem 0;

  a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  span {
    display: inline-block;
    margin-bottom: 0.5rem;
    i {
      font-size: 1.2rem;
      color: #f7f7f7;
    }
  }

  h3 {
    font-family: "DM Sans", sans-serif;
    color: #f7f7f7;
  }

  ${mq("tiny", "min")} {
    width: 33.3%;
    height: 90px;
    &:hover {
      background-color: #f7f7f7;
      i {
        color: #ff6100;
      }
      h3 {
        color: #ff6100;
      }
    }
  }

  ${mq("desktopS", "min")} {
    width: 100%;
    &:hover {
      background-color: #f7f7f7;
      i {
        color: #ff6100;
      }
      h3 {
        color: #ff6100;
      }
    }
  }
`

export const ButtonWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const Hamburger = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  div {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: visible;
  }
`

const slice1Opn = keyframes`
0% {
  transform: translateY(0);
  opacity: 1;
}


100% {
  width: 40px;
  transform: translateY(10px); 
  opacity: 0;
}
`
const slice1Cls = keyframes`
0% {
  width: 40px;
  transform: translateY(10px);
  opacity: 1;
}

100% {
  width: 20px;
  transform: translateY(0);
  opacity: 1; 
}
`

const slice2Opn = keyframes`
0% {
  transform: rotate(0);
}


100% {
  transform: rotate(45deg);
}

`

const slice2Cls = keyframes`
0% {
  transform: rotate(45deg);
}

100% {
  transform: rotate(0);
}
`

const slice3Opn = keyframes`
0% {
  transform: translateY(0);
  opacity: 1;
}

100% {
  width: 40px;
  transform: translateY(-10px);
  opacity: 0;
}
`

const slice3Cls = keyframes`
0% {
  width: 40px;
  transform: translateY(-10px);
  opacity: 1;
}

100% {
  width: 20px;
  transform: translateY(0);
  opacity: 1;
}
`

const slice4Opn = keyframes`
0% {
  transform: rotate(0);
  opacity: 0;
}

100% {
  transform: rotate(-45deg);
  opacity: 1;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
`
const slice4Cls = keyframes`
0% {
  transform: rotate(-45deg);
  opacity: 1;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}

100% {
  transform: rotate(0);
  opacity: 0;
  box-shadow: none;
}
`

export const Slice1 = styled("span")`
  display: inline-block;
  width: 20px;
  height: 4px;
  margin: 0.2rem 0;
  border-radius: 4px;
  background-color: #f7f7f7;
  align-self: flex-start;
  &.animation-one-open {
    animation: ${slice1Opn} 400ms ease forwards normal;
  }
  &.animation-one-close {
    transform: translateY(10px);
    animation: ${slice1Cls} 400ms ease 600ms forwards normal;
  }
`
export const Slice2 = styled("span")`
  display: inline-block;
  width: 40px;
  height: 4px;
  margin: 0.2rem 0;
  border-radius: 4px;
  background-color: #f7f7f7;
  &.animation-two-open {
    animation: ${slice2Opn} 400ms ease 500ms forwards normal;
  }
  &.animation-two-close {
    animation: ${slice2Cls} 400ms ease forwards normal;
  }
`
export const Slice3 = styled("span")`
  display: inline-block;
  width: 20px;
  height: 4px;
  margin: 0.2rem 0;
  border-radius: 4px;
  background-color: #f7f7f7;
  align-self: flex-end;
  &.animation-three-open {
    animation: ${slice3Opn} 400ms ease forwards normal;
  }
  &.animation-three-close {
    transform: translateY(-10px);
    animation ${slice3Cls} 400ms ease 600ms forwards normal;
  }
`

export const Slice4 = styled("span")`
  display: inline-block;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 40px;
  height: 4px;
  margin: auto 0;
  opacity: 0;
  background-color: #f7f7f7;
  &.animation-four-open {
    animation: ${slice4Opn} 400ms ease 500ms forwards normal;
  }

  &.animation-four-close {
    animation: ${slice4Cls} 400ms ease forwards normal;
  }
`
