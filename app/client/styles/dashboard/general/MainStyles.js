import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const DashboardLayout = styled("section")`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  color: #555;
  margin: auto;

  ${mq("tiny", "min")} {
    overflow-y: hidden;
  }

  ${mq("desktopS", "min")} {
    overflow-y: hidden;
  }
`

export const DashboardMain = styled("div")`
  background-color: #f2f2f2;
  width: 100%;
  height: min-content;

  ${mq("tiny", "min")} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 136px;
    overflow: hidden;
  }

  ${mq("tablet", "min")} {
    margin-top: 80px;
  }

  ${mq("desktopS", "min")} {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: 40px auto;
    grid-gap: 1.5rem;
    grid-column-start: 1;
    grid-column-end: 13;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0 1.5rem;
    margin-top: 80px;
    overflow-y: hidden;
  }
`

export const ThirdPanel = styled("div")`
  ${mq("tiny", "min")} {
    display: none;
  }

  ${mq("desktopL", "min")} {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    grid-column-start: 9;
    grid-column-end: 13;
    grid-row-start: 2;
  }
`
