import React, { useState, useEffect, useContext } from "react"

import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../../context/registerContext/RegisterContext"

import {
  SectionWrapper,
  RegisterForm,
  GenInputContainer,
  LabelHeader,
  SectionButton,
  DecorativeBar,
  ArrowBody,
  ArrowHead,
  Circle,
} from "../../../../client/styles/register/SectionStyles"

import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"

import {
  InputWrapper,
  DotContainer,
  Dot1,
  Dot2,
  Dot3,
} from "../../../../client/styles/general/GeneralStyles"

import { validateCompanyName } from "../../../../client/validation/accValidation"

const SectionOne = ({ desc }) => {
  const [state, setState] = useState({
    name: "",
    company: "company",
    check: false,
  })

  const registerContext = useContext(RegisterContext)

  const { name, check } = state

  const { continueRegister } = registerContext

  const handleChange = (event) => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleCheck = () => {
    const checkName = validateCompanyName(name)

    if (typeof checkName === "string") {
      return
    }

    continueRegister({
      name,
    })
  }

  useEffect(() => {
    if (check === false) {
      if (name.length !== 0) {
        setState((prevState) => {
          return {
            ...prevState,
            check: true,
          }
        })
      }
    }

    return () => {}
  }, [check, name])

  return (
    <CSSTransition appear={true} in={true} timeout={300} classNames="section">
      <SectionWrapper>
        <RegisterDescription>{desc}</RegisterDescription>
        <RegisterForm>
          <GenInputContainer>
            <LabelHeader>
              <h4>Company Name</h4>
              <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="deco"
              >
                <DecorativeBar />
              </CSSTransition>
            </LabelHeader>
            <InputWrapper>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Company Name</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <SectionButton>
            <button type="button" onClick={handleCheck} disabled={!check} />
            <ArrowBody
              style={{
                backgroundColor: check ? "#fcfcfc" : "#888",
              }}
            />
            <ArrowHead
              style={{
                borderLeft: check ? "10px solid #fcfcfc" : "10px solid #888",
              }}
            />
            <Circle
              style={{
                transform: check ? "scale(1)" : "scale(0)",
              }}
            />
          </SectionButton>
        </RegisterForm>
      </SectionWrapper>
    </CSSTransition>
  )
}

export default SectionOne
