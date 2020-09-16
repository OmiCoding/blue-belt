import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const MessengerContainer = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  margin-bottom: 1.2rem;
  background-color: #f7f7f7;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const MessengerHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const HeaderItems = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ff6100;

  h3 {
    font-size: 1.3rem;
    font-family: "DM Sans", sans-serif;
  }

  div {
    position: relative;
    i {
      font-size: 1.1rem;
      margin-left: 1rem;
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
export const ProfileContainer = styled("div")`
  position: relative;
  width: 100%;
  height: 150px;
  overflow: hidden;
  padding: 0.5rem;
`

export const ProfileScroll = styled("div")`
  position: absolute;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Profile = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 1.5rem;
  flex-shrink: 0;

  h5 {
    font-size: 1rem;
    font-family: "DM Sans", sans-serif;
  }
`

export const ProfileImg = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 0.75rem;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`

export const MessengerSearch = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  input {
    width: 100%;
    height: 45px;
    font-size: 1.2rem;
    background-color: #f1f1f1;
    padding-left: 1rem;
    cursor: text;
    transition: all 300ms ease;

    &:focus ~ label {
      opacity: 0;
    }
  }

  label {
    position: absolute;
    display: inline-block;
    top: 11.25px;
    left: 0;
    margin: auto;
    pointer-events: none;
    cursor: text;
    transition: all 300ms ease;
    color: #aaa;
  }

  ${mq("tiny", "min")} {
    label {
      font-size: 1rem;
      padding-left: 1rem;
      overflow: hidden;

      i {
        margin-right: 0.5rem;
      }
    }
  }

  ${mq("tablet", "min")} {
    label {
      font-size: 1.2rem;
      padding-left: 2rem;

      i {
        margin-right: 1.2rem;
      }
    }
  }
`

export const Messages = styled("div")`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200px;
`

export const MessageScroll = styled("div")`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const Message = styled("div")`
  display: flex;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem 0;
`

export const MessageAvatar = styled("div")`
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("tablet", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
`

export const MessageContent = styled("div")`
  flex-grow: 1;

  ${mq("tiny", "min")} {
    font-size: 0.8rem;
    margin-left: 0.5rem;
  }

  ${mq("tablet", "min")} {
    font-size: 1.1rem;
    margin-left: 1.5rem;
  }
`

export const MessageHeading = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  span {
    display: inline-block;
    font-size: 1.1rem;
    font-family: "DM Sans", sans-serif;
  }
`
