import React from "react"

import { CSSTransition } from "react-transition-group"

import { css } from "@emotion/core"

import {
  ChoiceContainer,
  ChoiceCard,
  CardContainer,
  ChoiceSVG,
} from "../../../client/styles/register/ChoiceStyles"

import { RegisterDescription } from "../../../client/styles/register/RegisterStyles"

// import employeeSVG from "../../../client/assets/icon-opti.svg"

const RegisterChoice = ({ handleSelection }) => {
  return (
    <>
      <CSSTransition in={true} appear={true} timeout={600} classNames="choice">
        <ChoiceContainer>
          <RegisterDescription>
            Please choose the option that you wish to start with.
          </RegisterDescription>
          <CardContainer>
            <ChoiceCard>
              <ChoiceSVG />
              {/* <EmployeeSVG
                css={css`
                  @media screen and min-width: 1200px {
                    width: 320px;
                    height: 320px;
                    g {
                      fill: #fcfcfc;
                    }
                  }
                `}
              /> */}
              <button onClick={() => handleSelection("company")} />
              <h3>Company</h3>
            </ChoiceCard>
            <ChoiceCard>
              <ChoiceSVG />
              {/* <EmployeeSVG /> */}
              <button onClick={() => handleSelection("worker")} />
              <h3>Worker</h3>
            </ChoiceCard>
            {/* <ChoiceSVG2 /> */}
          </CardContainer>
        </ChoiceContainer>
      </CSSTransition>
    </>
  )
}

export default RegisterChoice
