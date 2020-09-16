import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

export const ShowcaseWrapper = styled("section")`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1920px;
  max-height: 1080px;
  margin: 0 auto;
  z-index: 0;
  overflow: hidden;
`

export const ShowcaseContent = styled("div")`
  position: relative;
  width: 100%;
  opacity: 0;
  transform: translateY(50px);
  flex-grow: 1;
  z-index: 4;

  &.content-appear,
  &.content-enter {
    transform: translateY(50px);
    opacity: 0;
  }

  &.content-appear-active,
  &.content-enter-active {
    transform: translateY(0);
    opacity: 1;
    transition: all 600ms ease;
  }

  &.content-appear-done,
  &.content-enter-done {
    transform: translateY(0);
    opacity: 1;
  }

  ${mq("tiny", "min")} {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }

  ${mq("desktopS", "min")} {
    display: grid;
    grid-template-rows: 3fr 1fr;
    grid-template-columns: repeat(12, 1fr);
    justify-content: flex-start;
    flex-direction: row;
  }
`

export const ShowcaseMid = styled("div")`
  ${mq("tablet", "min")} {
    padding: 0 3rem;
  }

  ${mq("desktopS", "min")} {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 2;
    padding: 0 8rem;
  }
`

export const ShowcaseTitle = styled("h1")`
  font-family: "MuseoModerno", sans-serif;
  width: 100%;

  ${mq("tiny", "min")} {
    font-size: 2rem;
    text-align: center;
  }

  ${mq("tablet", "min")} {
    font-size: 3rem;
    text-align: left;
  }

  ${mq("desktopS", "min")} {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 4rem;
    text-align: left;
    margin-top: 7rem;
  }
`

export const ShowcaseDesc = styled("em")`
  display: inline-block;

  ${mq("tiny", "min")} {
    text-align: center;
    font-size: 1.1rem;
    margin-top: 0.5rem;
  }

  ${mq("tablet", "min")} {
    text-align: left;
    margin-top: 1rem;
  }

  ${mq("desktopS", "min")} {
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  ${mq("desktopM", "min")} {
    width: 50%;
  }

  ${mq("desktopL", "min")} {
    width: 40%;
  }
`

export const ShowcaseEnd = styled("div")`
  display: flex;
  align-items: center;
  height: 100px;

  ${mq("tiny", "min")} {
    width: 100%;
    justify-content: center;
  }

  ${mq("desktopS", "min")} {
    justify-content: flex-end;
    width: 80%;
    grid-column-start: 1;
    grid-column-end: 13;
    grid-row-start: 2;
    grid-row-end: 3;
  }
`

export const ShowcaseLink = styled("div")`
  ${mq("tiny", "min")} {
    position: relative;
    font-size: 1rem;
    font-family: "DM Sans", sans-serif;
    color: #371318;
    background-color: #fcfcfc;
    padding: 0.5rem 1.2rem;
    cursor: pointer;
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%:
      height: 100%;
    }
  }

  ${mq("tablet", "min")} {
    font-size: 1.2rem;
  }

  ${mq("desktopS", "min")} {
    padding: 0.75rem 2rem;
    font-size: 1.5rem;
    margin:
  }
`
// export const PplSVG = styled(peopleSVG)`
//   height: 100%;
// `
// export const LandscapeSVG = styled(landscape)`
//   height: 100%;
// `
// export const BuildingsSVG = styled(buildings)`
//   height: 100%;
// `
// export const SunsetSVG = styled(sunset)`
//   height: 100%;
// `
