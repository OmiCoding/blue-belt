import React, { useState, useContext, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../../context/registerContext/RegisterContext"

import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"

import {
  SectionWrapper,
  RegisterForm,
  GenInputContainer,
  RadioContainer,
  RadioWrapper,
  RadioDesign,
  RadioLeft,
  RadioRight,
  LabelHeader,
  SelectWrapper,
  Select,
  OptionWrapper,
  Option,
  SectionButton,
  DecorativeBar,
  ArrowBody,
  ArrowHead,
  Circle,
} from "../../../../client/styles/register/SectionStyles"

import {
  InputWrapper,
  DotContainer,
  Dot1,
  Dot2,
  Dot3,
} from "../../../../client/styles/general/GeneralStyles"

import { validateEmployment } from "../../../../client/validation/accValidation"

// TODO: Optional How you here about us

const SectionThree = ({ desc }) => {
  const [state, setState] = useState({
    career: "",
    experience: "",
    education: "",
    employed: "",
    choice: "",
    choiceName: "",
    other: "",
    optional: false,
    check: false,
    select: false,
  })

  const {
    career,
    experience,
    education,
    employed,
    choice,
    choiceName,
    other,
    check,
    select,
  } = state

  const registerContext = useContext(RegisterContext)

  const { choices, continueRegister } = registerContext

  const handleSelect = () => {
    return setState({
      ...state,
      select: !select,
    })
  }

  const handleSelChange = (choiceName, event) => {
    const { name, value } = event.target

    if (name === "choice") {
      setState({
        ...state,
        [name]: value,
        choiceName,
      })
    } else {
      setState({
        ...state,
        [name]: value,
      })
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleCheck = () => {
    if (typeof employed !== "string") {
      return
    }

    const checkEmployed = validateEmployment(employed === "yes" ? true : false)

    if (typeof checkEmployed === "string") {
      return
    }
    if (career.length === 0) {
      return
    }
    if (experience.length === 0) {
      return
    }
    if (education.length === 0) {
      return
    }

    continueRegister({
      career,
      choice,
      experience,
      education,
      employed: employed === "yes" ? true : false,
    })
  }

  useEffect(() => {
    if (check === false) {
      if (
        career.length !== 0 &&
        experience.length !== 0 &&
        education.length !== 0 &&
        typeof employed === "string"
      ) {
        setState({
          ...state,
          check: !check,
        })
      }
    }

    return () => {}
  }, [check, career, experience, education, employed])

  return (
    <CSSTransition appear={true} in={true} timeout={300} classNames="section">
      <SectionWrapper>
        <RegisterDescription>{desc}</RegisterDescription>
        <RegisterForm>
          <GenInputContainer>
            <LabelHeader>
              <h4>Profession</h4>
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
                name="career"
                value={career}
                onChange={handleChange}
                required
              />
              <label htmlFor="fName">Profession</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <GenInputContainer>
            <InputWrapper>
              <input
                type="text"
                name="experience"
                value={experience}
                onChange={handleChange}
                required
              />
              <label htmlFor="experience">Experience</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <GenInputContainer>
            <InputWrapper>
              <input
                type="text"
                name="education"
                value={education}
                onChange={handleChange}
                required
              />
              <label htmlFor="education">Education</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <GenInputContainer>
            <RadioContainer>
              <LabelHeader>
                <h4>Employed?</h4>
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
                  <RadioLeft htmlFor="employed">
                    Yes
                    <RadioDesign
                      style={{
                        backgroundColor:
                          employed === "yes" ? "#34adf1" : "#fcfcfc",
                      }}
                    >
                      <input
                        type="radio"
                        name="employed"
                        value="yes"
                        checked={employed === "yes"}
                        onChange={handleChange}
                      />
                      <span
                        style={{
                          opacity: employed === "yes" ? "1" : "0",
                        }}
                      />
                    </RadioDesign>
                  </RadioLeft>
                  <RadioRight htmlFor="employed">
                    No
                    <RadioDesign
                      style={{
                        backgroundColor:
                          employed === "no" ? "#34adf1" : "#fcfcfc",
                      }}
                    >
                      <input
                        type="radio"
                        name="employed"
                        value="no"
                        checked={employed === "no"}
                        onChange={handleChange}
                      />
                      <span
                        style={{
                          opacity: employed === "no" ? "1" : "0",
                        }}
                      />
                    </RadioDesign>
                  </RadioRight>
                </div>
              </RadioWrapper>
            </RadioContainer>
          </GenInputContainer>
          <GenInputContainer>
            <SelectWrapper>
              <Select
                style={{
                  borderBottom: select
                    ? "solid 0.1rem transparent"
                    : "solid 0.1rem rgba(0, 0, 0, 0.2)",
                }}
              >
                <h4
                  style={{
                    color: choiceName === "" ? "#888" : "#f76918",
                  }}
                >
                  {choice === "" ? "How'd you hear about us?" : choiceName}
                </h4>
                <div>
                  <i
                    style={{
                      borderColor: select ? "#f76918" : "#888",
                      transform: select ? "rotate(45deg)" : "rotate(-135deg)",
                    }}
                  />
                </div>
                <button type="button" onClick={() => handleSelect()} />
              </Select>
              {select ? (
                <CSSTransition
                  appear={true}
                  in={true}
                  timeout={400}
                  classNames="select"
                >
                  <OptionWrapper>
                    {choices.map((elem, ind) => {
                      return (
                        <Option key={ind}>
                          <div>
                            <label>{elem}</label>
                            <input
                              type="radio"
                              name="choice"
                              checked={choice === elem}
                              value={elem}
                              onChange={(e) => handleSelChange(elem, e)}
                            />
                          </div>
                        </Option>
                      )
                    })}
                  </OptionWrapper>
                </CSSTransition>
              ) : null}
            </SelectWrapper>
          </GenInputContainer>
          {choice === "Other" ? (
            <GenInputContainer>
              <InputWrapper>
                <textarea
                  name="other"
                  minLength={1}
                  required
                  value={other}
                  onChange={handleChange}
                />
                <label>Other</label>
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </InputWrapper>
            </GenInputContainer>
          ) : null}
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

export default SectionThree
