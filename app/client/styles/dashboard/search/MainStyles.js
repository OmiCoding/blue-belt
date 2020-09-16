import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const SearchContainer = styled("section")`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const SearchMain = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  ${mq("tiny", "min")} {
    margin-top: 120px;
  }

  ${mq("tablet", "min")} {
    margin-top: 80px;
  }
`
