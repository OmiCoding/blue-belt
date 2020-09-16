import React from "react"
import { Global, css } from "@emotion/core"
import mq from "../../utils/functions/breakpoints"

const GlobalLayout = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
          }

          html,
          body {
            height: 100%;
            width: 100%;
            font-family: "Roboto", sans-serif;
          }

          body {
            overflow-x: hidden;
            background-color: #fcfcfc;
          }

          div#root {
            position: relative;
            width: 100%;
            height: 100%;
          }

          a {
            text-decoration: none;
          }

          li {
            list-style: none;
          }

          input,
          textarea {
            border: none;
            background-color: #f7f7f7;
            caret-color: #34adf1;
            outline: solid 0.1rem rgba(0, 0, 0, 0.2);
            cursor: pointer;
          }

          textarea {
            resize: none;
          }

          button {
            border: none;
            cursor: pointer;
            background-color: transparent;
          }
        `}
      />
      {children}
    </>
  )
}

export default GlobalLayout
