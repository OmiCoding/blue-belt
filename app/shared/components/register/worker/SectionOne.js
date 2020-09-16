import React, { useState, useEffect, useRef, useContext } from "react"

import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../../context/registerContext/RegisterContext"

import {
  SectionWrapper,
  RegisterForm,
  GenInputContainer,
  DOBContainer,
  LabelHeader,
  InputSm,
  InputMed,
  RadioContainer,
  RadioWrapper,
  RadioLeft,
  RadioRight,
  OptionButton,
  GenderContainer,
  SectionButton,
  DecorativeBar,
  ArrowBody,
  ArrowHead,
  Circle,
  RadioDesign,
} from "../../../../client/styles/register/SectionStyles"

import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"

import {
  InputWrapper,
  DotContainer,
  Dot1,
  Dot2,
  Dot3,
} from "../../../../client/styles/general/GeneralStyles"

import {
  validateDOB,
  validateName,
  validateSex,
} from "../../../../client/validation/accValidation"
import dobModify from "../../../../utils/functions/dobModify"

const SectionOne = ({ desc }) => {
  const [state, setState] = useState({
    fName: "",
    lName: "",
    month: "",
    year: "",
    day: "",
    sex: "",
    gender: "",
    prefName: "",
    worker: "worker",
    optional: false,
    check: false,
  })

  const registerContext = useContext(RegisterContext)

  const refDay = useRef(null)
  const refMon = useRef(null)
  const refYear = useRef(null)

  const {
    fName,
    lName,
    month,
    year,
    day,
    sex,
    gender,
    prefName,
    worker,
    optional,
    check,
  } = state

  const { continueRegister } = registerContext

  const handleChange = (event) => {
    const { name, value } = event.target
    // let value = name === "sex" ? event.target.value : event.target.value

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleDOBChange = (event) => {
    const { name, value } = event.target
    if (name === "day" && value.length === 2) {
      if (month.length !== 2) {
        refMon.current.focus()
      } else if (year.length !== 4) {
        refYear.current.focus()
      }
    }
    if (name === "month" && value.length === 2) {
      if (day.length !== 2) {
        refDay.current.focus()
      } else if (year.length !== 4) {
        refYear.current.focus()
      }
    }
    if (name === "year" && value.length === 4) {
      if (day.length !== 2) {
        refMon.current.focus()
      } else if (month.length !== 2) {
        refYear.current.focus()
      }
    }

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleCheck = () => {
    const checkDOB = validateDOB(day, month, year)

    const checkFName = validateName(fName)
    const checkLName = validateName(lName)
    const checkSex = validateSex(sex)

    if (typeof checkDOB === "string") {
      // Create some css error display
      return
    }
    if (typeof checkFName === "string") {
      // Create some css error display
      return
    }
    if (typeof checkLName === "string") {
      // Create some css error display
      return
    }

    if (typeof checkSex === "string") {
      // Create some css error display
      return
    }

    const dob = dobModify(day, month, year)

    continueRegister({
      fName,
      lName,
      sex,
      dob: dob,
      worker,
    })
  }

  const handleOptional = () => {
    let revert
    if (check) {
      revert = !check
    } else {
      revert = check
    }
    setState({
      ...state,
      optional: !optional,
      check: revert,
    })
  }

  useEffect(() => {
    if (check === false) {
      if (
        fName.length !== 0 &&
        lName.length !== 0 &&
        month.length !== 0 &&
        day.length !== 0 &&
        year.length !== 0 &&
        sex !== ""
      ) {
        if (optional === true) {
          if (gender !== "") {
            setState((prevState) => {
              return {
                ...prevState,
                check: true,
              }
            })
          }
        } else if (optional === false) {
          setState((prevState) => {
            return {
              ...prevState,
              check: true,
            }
          })
        }
      }
    }

    return () => {}
  }, [check, fName, lName, month, day, year, sex, optional, gender, prefName])

  return (
    <CSSTransition appear={true} in={true} timeout={300} classNames="section">
      <SectionWrapper>
        <RegisterDescription>{desc}</RegisterDescription>
        <RegisterForm>
          <GenInputContainer>
            <LabelHeader>
              <h4>Full Name</h4>
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
                name="fName"
                value={fName}
                onChange={handleChange}
                required
              />
              <label htmlFor="fName">First Name</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                name="lName"
                value={lName}
                onChange={handleChange}
                required
              />
              <label htmlFor="lName">Last Name</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <DOBContainer>
            <LabelHeader>
              <h4>Date of birth</h4>
              <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="deco"
              >
                <DecorativeBar />
              </CSSTransition>
            </LabelHeader>
            <div
              style={{
                overflow: "visible",
              }}
            >
              <div
                style={{
                  overflow: "visible",
                }}
              >
                <InputSm
                  ref={refDay}
                  type="text"
                  name="day"
                  onChange={handleDOBChange}
                  required
                  minLength={1}
                  maxLength={2}
                />
                <label htmlFor="day">dd</label>
              </div>
              <div
                style={{
                  overflow: "visible",
                }}
              >
                <InputSm
                  ref={refMon}
                  type="text"
                  name="month"
                  onChange={handleDOBChange}
                  required
                  minLength={1}
                  maxLength={2}
                />
                <label htmlFor="month">mm</label>
              </div>
              <div
                style={{
                  overflow: "visible",
                }}
              >
                <InputMed
                  ref={refYear}
                  type="text"
                  name="year"
                  onChange={handleDOBChange}
                  required
                  minLength={4}
                  maxLength={4}
                />
                <label htmlFor="year">yyyy</label>
              </div>
            </div>
          </DOBContainer>
          <RadioContainer>
            <LabelHeader>
              <h4>Sex</h4>
              <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="deco"
              >
                <DecorativeBar />
              </CSSTransition>
            </LabelHeader>
            <RadioWrapper>
              <div>
                <RadioLeft htmlFor="male">
                  Male
                  <RadioDesign
                    style={{
                      backgroundColor: sex === "male" ? "#34adf1" : "#fcfcfc",
                    }}
                  >
                    <input
                      type="radio"
                      name="sex"
                      value="male"
                      checked={sex === "male"}
                      onChange={handleChange}
                    />
                    <span
                      style={{
                        opacity: sex === "male" ? "1" : "0",
                      }}
                    />
                  </RadioDesign>
                </RadioLeft>
                <RadioRight htmlFor="female">
                  Female
                  <RadioDesign
                    style={{
                      backgroundColor: sex === "female" ? "#34adf1" : "#fcfcfc",
                    }}
                  >
                    <input
                      type="radio"
                      name="sex"
                      value="female"
                      checked={sex === "female"}
                      onChange={handleChange}
                    />
                    <span
                      style={{
                        opacity: sex === "female" ? "1" : "0",
                      }}
                    />
                  </RadioDesign>
                </RadioRight>
              </div>
              <OptionButton>
                <h3
                  style={{
                    color: optional === false ? "#888" : "#34adf1",
                  }}
                >
                  {optional === false ? "+" : "[-]"}
                </h3>
                <h3
                  style={{
                    color: optional === false ? "#888" : "#34adf1",
                  }}
                >
                  Add gender information
                </h3>
                <button type="button" onClick={() => handleOptional()} />
              </OptionButton>
            </RadioWrapper>
          </RadioContainer>
          <GenderContainer>
            {optional === false ? null : (
              <>
                <LabelHeader>
                  <h4>Gender Identity</h4>
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
                  <textarea
                    name="gender"
                    minLength={1}
                    required
                    value={gender}
                    onChange={handleChange}
                  />
                  <label>Gender Info</label>
                  <DotContainer>
                    <Dot1 />
                    <Dot2 />
                    <Dot3 />
                  </DotContainer>
                </InputWrapper>
                <InputWrapper>
                  <input
                    name="prefName"
                    value={prefName}
                    onChange={handleChange}
                    minLength={1}
                    required
                  />
                  <label>Preferred Name</label>
                  <DotContainer>
                    <Dot1 />
                    <Dot2 />
                    <Dot3 />
                  </DotContainer>
                </InputWrapper>
              </>
            )}
          </GenderContainer>
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
