import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const PostContainer = styled("form")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background-color: #f7f7f7;
  overflow: visible;
  transition: all 300ms ease;
  border: 1px solid rgba(0, 0, 0, 0.1);

  ${mq("tiny", "min")} {
    width: 100%;
    margin: 1.5rem auto;
  }

  ${mq("phoneLg", "min")} {
    width: 515px;
  }

  ${mq("tablet", "min")} {
    width: 650px;
  }

  ${mq("desktopS", "min")} {
    width: 100%;
    margin: 0;
    height: min-content;
  }
`

export const TextWrapper = styled("div")`
  position: relative;
  width: 100%;
  overflow: visible;

  label {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    font-size: 1.1rem;
    padding: 1rem 0 0 1rem;
    pointer-events: none;
    transition: all 300ms ease;
  }
`
export const PostText = styled("textarea")`
  width: 100%;
  height: 60px;
  outline: unset;
  font-size: 1.1rem;
  cursor: text;
  padding: 1rem 0 0 1rem;
  opacity: 1;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  transition: all 300ms ease;

  &:focus {
    height: 70px;
  }

  &:focus ~ label {
    opacity: 0;
  }

  &:focus ~ div {
    height: 40px;
  }
`

export const OptionWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30px;
  background-color: #f7f7f7;
`

export const MediaOptions = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0.5rem;
  i {
    font-size: 1.2rem;
    color: #ff6100;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

export const FeedContainer = styled("div")`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  ${mq("tiny", "min")} {
    margin: 1.2rem auto;
    width: 100%;
    overflow: visible;
  }

  ${mq("phoneLg", "min")} {
    width: 515px;
  }

  ${mq("tablet", "min")} {
    width: 650px;
  }

  ${mq("desktopS", "min")} {
    grid-column-start: 5;
    grid-column-end: 13;
    grid-row-start: 2;
    width: auto;
    margin: 0;
    overflow: hidden;
  }

  ${mq("desktopL", "min")} {
    grid-column-start: 4;
    grid-column-end: 9;
    grid-row-start: 2;
  }
`

export const SortWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: centers;
  width: 100%;
  overflow: visible;

  ${mq("tiny", "min")} {
    margin: 1.2rem auto;
    width: 100%;
  }

  ${mq("phoneLg", "min")} {
    width: 515px;
  }

  ${mq("tablet", "min")} {
    width: 650px;
  }

  ${mq("desktopS", "min")} {
    width: 100%;
    margin: 1rem 0;
  }
`

export const SortBtn = styled("div")`
  position: relative;
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

export const PostsWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  margin: 1.2rem 0;
  overflow: visible;
  background-color: #f7f7f7;
  outline: 1px solid rgba(0, 0, 0, 0.1);
`
export const PostHeader = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 1rem;
  overflow: visible;
`

export const HeaderItems = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const PostAvatarWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export const PostAvatar = styled("img")`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

export const NameWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 1rem;

  h3 {
    font-family: "DM Sans", sans-serif;
    font-size: 1.1rem;
    color: #555;
  }

  span {
    display: inline-block;
    font-size: 0.9rem;
    color: #aaa;
  }
`

export const PostOption = styled("div")`
  position: relative;
  i {
    color: #ff6100;
    font-size: 1.2rem;
  }
  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%:
    height: 100%;
  }
`

export const PostBodyWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow: visible;
`

export const PostComment = styled("div")`
  width: 100%;
  margin: 1.5rem 0;
  padding: 0 1rem;
  p {
    font-size: 1.3rem;
    color: #555;
  }
  div {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    color: #ff6100;
    font-size: 1.3rem;
    button {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
`

export const PostImageWrapper = styled("div")`
  position: relative;
  width: 100%;
  height: 400px;
`

export const PostImage = styled("img")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 400px;
`

export const PostActivity = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 97, 0, 0.2);
    border-radius: 50%;
    padding: 0.3rem;
    margin-right: 0.5rem;
    i {
      font-size: 1.1rem;
      color: #555;
    }
  }

  span {
    font-size: 1.1rem;
    margin: 0 0.5rem;
    color: #555;
  }
`

export const MiniCircle = styled("span")`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #888;
`

export const InteractWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0.75rem 1rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`

export const InteractItem = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  margin-right: 1.5rem;

  i {
    font-size: 1.1rem;
    color: #ff6100;
    margin-right: 0.3rem;
  }

  span {
    font-size: 1.1rem;
    color: #ff6100;
  }

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`
