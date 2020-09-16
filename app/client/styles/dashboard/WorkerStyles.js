import styled from "@emotion/styled"
import mq from "../../../utils/functions/breakpoints"

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
