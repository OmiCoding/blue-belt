import React, { useContext } from "react"
import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../context/registerContext/RegisterContext"

import RegisterChoice from "./RegisterChoice"
import RegisterCompany from "./company/RegisterCompany"
import RegisterWorker from "./worker/RegisterWorker"
import GlobalLayout from "../GlobalLayout"
import {
  RegisterLayout,
  SVGContainer,
  RegisterFormContainer,
  RegisterHeader,
} from "../../../client/styles/register/RegisterStyles"

import sillhouetteSVGUrl from "../../../client/assets/sillhouette-ld-opti.svg"

const Register = () => {
  const registerContext = useContext(RegisterContext)

  const { select, handleSelection } = registerContext

  return (
    <GlobalLayout>
      <SVGContainer
        style={{
          backgroundImage: `url("/web/assets/sillhouette-ld-opti.svg")`,
        }}
      >
        {/* <RegisterSillhouette /> */}
      </SVGContainer>
      <RegisterLayout>
        <CSSTransition appear={true} in={true} timeout={300} classNames="form">
          <RegisterFormContainer>
            <RegisterHeader>blubelt</RegisterHeader>
            {select === "" ? (
              <RegisterChoice handleSelection={handleSelection} />
            ) : select === "worker" ? (
              <RegisterWorker />
            ) : (
              <RegisterCompany />
            )}
          </RegisterFormContainer>
        </CSSTransition>
      </RegisterLayout>
    </GlobalLayout>
  )
}

export default Register
