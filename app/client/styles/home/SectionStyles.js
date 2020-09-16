import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

export const SectionWrapper = styled("section")`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1920px;
  max-height: 1080px;
  margin: 4rem auto;
  z-index: 0;
  overflow: hidden;

  ${mq("tiny", "min")} {
    flex-direction: column-reverse;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row;
  }
`
export const SectionRevWrapper = styled("section")`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1920px;
  max-height: 1080px;
  margin: 4rem auto;
  z-index: 0;
  overflow: hidden;

  ${mq("tiny", "min")} {
    flex-direction: column-reverse;
  }

  ${mq("desktopS", "min")} {
    flex-direction: row-reverse;
  }
`

export const SVGContainer = styled("div")`
  ${mq("tiny", "min")} {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 350px;
  }

  ${mq("desktopS", "min")} {
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 50%;
    height: 600px;
  }
`
export const TextContainer = styled("div")`
  color: #ff6100;
  ${mq("tiny", "min")} {
    text-align: center;
    width: 100%;
    padding: 0 1rem;
  }

  ${mq("desktopS", "min")} {
    text-align: left;
    width: 50%;
    margin-top: 2rem;
    padding: 0 2rem;
  }
  ${mq("desktopL", "min")} {
    padding: 0 3rem;
  }
`

export const SectionHeader = styled("h2")`
  font-family: "DM Sans", sans-serif;
  ${mq("tiny", "min")} {
    font-size: 1.3rem;
  }
  ${mq("tablet", "min")} {
    font-size: 1.7rem;
  }

  ${mq("desktopS", "min")} {
    font-size: 2rem;
  }

  ${mq("desktopM", "min")} {
    font-size: 3rem;
  }
`

export const SectionDesc = styled("span")`
  display: inline-block;
  font-size: 1.2rem;
  color: #371318;

  ${mq("tiny", "min")} {
    margin-top: 1.5rem;
  }

  ${mq("tablet", "min")} {
    width: 60%;
    margin-top: 2rem;
  }
`
