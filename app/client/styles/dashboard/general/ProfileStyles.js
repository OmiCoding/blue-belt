import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const ProfileDisplay = styled("div")`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  outline: 1px solid rgba(0, 0, 0, 0.1);

  ${mq("tiny", "min")} {
    width: 100%;
    height: auto;
    margin: 0 auto;
    overflow-y: hidden;
  }

  ${mq("phoneLg", "min")} {
    width: 515px;
  }

  ${mq("tablet", "min")} {
    width: 650px;
  }

  ${mq("desktopS", "min")} {
    height: min-content;
    width: 100%;
    padding: 1.2rem 1rem 1rem 1rem;
    grid-column-start: 1;
    grid-column-end: 5;
    grid-row-start: 2;
  }

  ${mq("desktopL", "min")} {
    grid-column-start: 1;
    grid-column-end: 4;
  }
`

export const AvatarWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  overflow: visible;
  width: 110px;
  height: 110px;
  margin: 1.2rem 0;
  z-index: 0;
`

export const AvatarImgWrapper = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 1;
`

export const Avatar = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  z-index: 1;
`

export const AvatarButton = styled("div")`
  position: relative;
  bottom: -15px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  width: 110px;
  height: 30px;
  border-radius: 25px;
  color: #ff6100;
  background-color: #f7f7f7;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: all 400ms ease;
  z-index: 2;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
  }

  span {
    display: inline-block;
    font-family: "DM Sans", sans-serif;
    font-size: 0.9rem;
  }

  i {
    font-size: 0.9rem;
    margin-left: 0.3rem;
  }
`

export const EditContainer = styled("div")`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  padding: 1rem 1rem 0 0;

  div {
    position: relative;
    i {
      color: #ff6100;
      font-size: 2rem;
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

export const IdentityContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  span {
    display: inline-block;
    color: #aaa;
  }
`

export const ProfileName = styled("span")`
  font-size: 1.3rem;
  font-family: "DM Sans", sans-serif;
  margin-bottom: 0.5rem;
  color: #555 !important;
`

export const DescOccupation = styled("span")`
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`

export const DescLocation = styled("span")`
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
`

export const ActivityContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);

  ${mq("tiny", "min")} {
    margin-top: 2rem;
    padding-bottom: 2rem;
    width: 100%;
  }
`

export const Activity = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    font-size: 1.1rem;
    color: #ff6100;
  }

  span {
    display: inline-block;
    font-size: 1.1rem;
    width: 100%;
  }
`
export const CredentialsContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1rem;
`

export const CredentialHeading = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 1rem 0;

  h3 {
    font-family: "DM Sans", sans-serif;
    font-size: 1rem;
    color: #ff6100;
  }
`

export const CrendentialBtn = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  color: #ff6100;

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
`

export const CredentialItem = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  font-size: 1.1rem;
  word-wrap: break-word;

  div {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    i {
      font-size: 1rem;
      margin-right: 0.5rem;
    }

    h3 {
      font-family: "DM-Sans", sans-serif;
      font-size: 1rem;
    }
  }

  span {
    display: inline-block;
    width: 100%;
    text-align: left;
    font-size: 0.9rem;
    color: #888;
    word-wrap: break-word !important;
  }

  ${mq("tiny", "min")} {
    margin-bottom: 1rem;
  }
`
