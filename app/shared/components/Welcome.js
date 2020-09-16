import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

import GlobalLayout from "./GlobalLayout"
import {
  RegisterLayout,
  SVGContainer,
} from "../../client/styles/register/RegisterStyles"

import sillouetteSVG from "../../client/assets/sillhouette-ld-opti.svg"

const Welcome = () => {
  const history = useHistory()

  useEffect(() => {
    setTimeout(() => {
      history.push("/login")
    }, 7000)
  }, [])

  return (
    <GlobalLayout>
      <RegisterLayout>
        <SVGContainer
          style={{
            backgroundImage: `url(${sillouetteSVG})`,
          }}
        />
      </RegisterLayout>
    </GlobalLayout>
  )
}

export default Welcome
