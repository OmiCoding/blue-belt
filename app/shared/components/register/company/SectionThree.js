import React, { useState, useContext, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../../context/registerContext/RegisterContext"

import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"

import {
  RegisterForm,
  GenInputContainer,
  SectionWrapper,
  SelectWrapper,
  Select,
  OptionWrapper,
  Option,
  SectionButton,
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

// TODO: Optional How you here about us

const SectionThree = ({ desc }) => {
  const [state, setState] = useState({
    choice: "",
    choiceName: "",
    other: "",
    optional: false,
    check: false,
    select: false,
  })

  const { choice, choiceName, other, check, select, optional } = state

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
    continueRegister({
      choice,
    })
  }

  useEffect(() => {
    if (check === false) {
      setState({
        ...state,
        check: !check,
      })
    }

    return () => {}
  }, [check])

  return (
    <CSSTransition appear={true} in={true} timeout={300} classNames="section">
      <SectionWrapper>
        <RegisterDescription>{desc}</RegisterDescription>
        <RegisterForm>
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
