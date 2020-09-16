import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const CardWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);

  ${mq("tiny", "min")} {
    width: 100%;
    margin: 2rem auto;
  }

  ${mq("tablet", "min")} {
    width: 600px;
  }
`

export const Title = styled("h2")`
  position: relative;
  width: 100%;
  font-family: "DM Sans", sans-serif;
  color: #333;
  margin-bottom: 0.2rem;
  cursor: pointer;

  a {
    position: absolute;
    display: inline-block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${mq("tiny", "min")} {
    font-size: 1.2rem;
  }

  ${mq("desktopS", "min")} {
    font-size: 1.3rem;
  }

  &:hover {
    text-decoration: underline;
    text-decoration-thickness: 2px;
  }
`

export const Description = styled("span")`
  display: inline-block;
  font-size: 1rem;
  width: 100%;
  color: #333;
`

export const Salary = styled("span")`
  display: inline-block;
  font-size: 1rem;
  font-family: "DM Sans", sans-serif;
  width: 100%;
  margin: 0.75rem 0;
`

export const BadgeWrapper = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  margin: 0.75rem 0;
`

export const Badge = styled("div")`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;

  i {
    font-size: 1.2rem;
    color: #333;
    margin-right: 0.3rem;
  }

  span {
    font-size: 0.875rem;
  }
`
