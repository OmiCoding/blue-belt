import styled from "@emotion/styled"
import mq from "../../../../utils/functions/breakpoints"

export const PostingFormContainer = styled("div")`
  position: relative;
  background-color: #fcfcfc;
  margin: auto;

  ${mq("tiny", "min")} {
    width: 100%;
    height: auto;
    padding: 1rem;
  }

  ${mq("tablet", "min")} {
    padding: 1.5rem;
    width: 650px;
  }

  ${mq("desktopS", "min")} {
    width: 750px;
  }
`

export const PostingHeader = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;

  h1 {
    width: 100%;
    height: 100%;
    width: 100%;
    font-family: "DM Sans", sans-serif;
    color: #ff6100;
  }

  ${mq("tiny", "min")} {
    h1 {
      text-align: center;
    }
    margin: 70px auto 1.2rem auto;
  }

  ${mq("tablet", "min")} {
    margin: 70px auto 1.2rem auto;
  }

  ${mq("desktopS", "min")} {
    h1 {
      text-align: left;
      font-size: 2rem;
    }
    margin: 2rem auto;
  }
`

export const Form = styled("form")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`

export const QuillWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0.75rem 0;
  h3 {
    font-family: "DM Sans", sans-serif;
    color: #ff6100;
    margin: 0.5rem 0;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color: #aaa;
    margin-bottom: 0.75rem;
  }

  div.quill {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
    & > div.ql-toolbar {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
    & > div.ql-container {
      height: 400px;
      font-size: 1rem;
    }
  }

  ${mq("tiny", "min")} {
    width: 100%;
    h3 {
      text-align: left;
      width: 90%;
    }

    div.quill {
      & > div.ql-container {
        margin-top: 90px;
      }
    }
  }

  ${mq("tablet", "min")} {
    div.quill {
      & > div.ql-container {
        margin-top: 54px;
      }
    }
  }

  ${mq("desktopS", "min")} {
    h3 {
      width: 100%;
    }
  }
`

export const InputWrapper = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0.75rem 0;

  h3 {
    font-family: "DM Sans", sans-serif;
    color: #ff6100;
    margin: 0.5rem 0;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color: #aaa;
    margin-bottom: 0.75rem;
  }

  input {
    outline: unset;
    border: 1px solid rgba(0, 0, 0, 0.1);
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  ${mq("tiny", "min")} {
    width: 100%;

    h3 {
      text-align: left;
      width: 90%;
    }

    input {
      width: 100%;
    }
  }

  ${mq("tablet", "min")} {
  }

  ${mq("desktopS", "min")} {
    h3 {
      width: 100%;
    }
  }
`

export const SplitWrapper = styled("div")`
  display: flex;
  width: 100%;

  ${mq("tiny", "min")} {
    flex-direction: column;

    div {
      width: 50%;
    }
  }
`

export const SplitInputs = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`

export const SelectWrapper = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  color #aaa;
  h3 {
    font-family: "DM Sans", sans-serif;
    color: #ff6100;
    margin: 0.5rem 0;
  }
`

export const SelectFlex = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  color: #777;
  overflow: hidden;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &:hover {
    color: #ff6100;
  }

  ${mq("tiny", "min")} {
    width: 270px;
  }

  ${mq("tablet", "min")} {
    width: auto;
  }
`

export const SelectBox = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  span {
    display: inline-block;
    font-size: 1.2rem;
    font-family: "DM Sans", sans-serif;
    padding-left: 1rem;
  }

  ${mq("tiny", "min")} {
    width: 250px;
  }

  ${mq("tablet", "min")} {
    width: 292px;
  }

  ${mq("desktopS", "min")} {
    h3 {
      width: 100%;
    }
  }
`

export const SelectBtn = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  i {
    font-size: 1.1rem;
  }
`

export const MiniSelectWrapper = styled("div")`
  position: relative;
  display: flex;
  color: #777;
  margin-top: 1rem;

  h3 {
    font-family: "DM Sans", sans-serif;
    color: #ff6100;
    margin: 0.5rem 0;
  }

  input {
    height: 40px;
    padding: 0.5rem;
    font-size: 1.1rem;
    margin-right: 0.5rem;
    outline: unset;
    border: 1px solid rgba(0, 0, 0, 0.1);
    align-self: flex-start;
    color: #aaa;
  }

  ${mq("tiny", "min")} {
    flex-direction: column;
    width: 100%;

    input {
      width: 50%;
    }
  }
`

export const MiniSelectFlex = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-left: 1px solid rgba(0, 0, 0, 0.1);
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  overflow: hidden;

  button {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ${mq("tiny", "min")} {
    width: 90px;
  }
`

export const MiniSelectBox = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;

  span {
    display: inline-block;
    font-size: 0.8rem;
    font-family: "DM Sans", sans-serif;
    padding-left: 1rem;
  }

  ${mq("tiny", "min")} {
    width: 60px;
  }
`

export const MiniSelectBtn = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;

  i {
    font-size: 0.8rem;
  }
`

export const SubmitBtn = styled("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-family: "DM Sans", sans-serif;
  padding: 0.75rem 1.5rem;
  background-color: #ff6100;
  color: #fcfcfc;
  margin: 2rem auto;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  z-index: 0;

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

  &::after {
    position: absolute;
    content: "";
    top: 0;
    left: -90px;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 400px;
    height: 400px;
    background-color: #fc8135;
    border-radius: 50%;
    transform: scale(0);
    transform-origin: center;
    transition: all 400ms ease;
    z-index: -1;
  }

  &:hover::after {
    transform: scale(1);
  }
`
