import styled from "@emotion/styled"

import mq from "../../../../utils/functions/breakpoints"

export const PostContainer = styled("section")`
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #fcfcfc;
  overflow: auto;
`

export const ContentWrapper = styled("div")`
  ${mq("tiny", "min")} {
    padding: 1rem;
    width: 100%;
    margin-top: 136px;
  }

  ${mq("tablet", "min")} {
    margin-top: 80px;
  }

  ${mq("desktopS", "min")} {
    justify-content: flex-start;
    padding: 1rem;
    margin-left: 5rem;
    width: 80%;
  }
`

export const HeadingContainer = styled("div")`
  display: flex;
  flex-direction: column;
  color: #333;
  padding: 3rem 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    font-family: "DM Sans", sans-serif;
  }

  ${mq("tiny", "min")} {
    text-align: center;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
    width: 60%;
  }
`

export const HeadingDesc = styled("div")`
  display: flex;

  span {
    font-size: 0.9rem;
    color: #aaa;
    margin-right: 0.4rem;
  }

  ${mq("tiny", "min")} {
    justify-content: center;
  }

  ${mq("desktopS", "min")} {
    justify-content: flex-start;
  }
`

export const BodyContainer = styled("div")`
  padding: 2rem 0;

  p {
    margin: 0.5rem 0;
  }

  ul {
    margin: 1rem 0;
    li {
      margin: 0.5rem 0.3rem 0.3rem 0;

      list-style: inside;
    }
  }

  ${mq("desktopS", "min")} {
    width: 60%;
  }
`
