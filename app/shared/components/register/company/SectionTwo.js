import React, { useState, useRef, useContext, useEffect } from "react"
import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../../context/registerContext/RegisterContext"

import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"

import {
  validateCity,
  validateProvince,
  validateZipCode,
  validatePostalCode,
} from "../../../../client/validation/accValidation"

import {
  RegisterForm,
  LabelHeader,
  DecorativeBar,
  GenInputContainer,
  OptionButton,
  SectionButton,
  SelectWrapper,
  Select,
  OptionWrapper,
  Option,
  InputDivision,
  Division,
  InputMed,
  InputSm,
  ArrowBody,
  ArrowHead,
  Circle,
  PostBar,
  SectionWrapper,
} from "../../../../client/styles/register/SectionStyles"

import {
  InputWrapper,
  DotContainer,
  Dot1,
  Dot2,
  Dot3,
} from "../../../../client/styles/general/GeneralStyles"

const SectionTwo = ({ desc }) => {
  const [state, setState] = useState({
    location: "",
    province: "",
    provName: "",
    city: "",
    floor: "",
    zipCode: "",
    country: "US",
    postal1: "",
    postal2: "",
    optional: false,
    check: false,
    select: false,
  })

  const {
    location,
    province,
    provName,
    city,
    floor,
    zipCode,
    country,
    postal1,
    postal2,
    optional,
    check,
    select,
  } = state

  const postalOne = useRef(null)
  const postalTwo = useRef(null)

  const registerContext = useContext(RegisterContext)

  const { provinces, continueRegister } = registerContext

  const handleChange = () => {
    const { name, value } = event.target

    if (name === "postal1" && value.length === 5) {
      if (postal2.length !== 4) {
        postalTwo.current.focus()
      }
    }
    if (name === "postal2" && value.length === 4) {
      if (postal1.length !== 5) {
        postalOne.current.focus()
      }
    }

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSelChange = (provName, event) => {
    const { name, value } = event.target

    if (name === "province") {
      setState({
        ...state,
        [name]: value,
        provName,
      })
    } else {
      setState({
        ...state,
        [name]: value,
      })
    }
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

  const handleSelect = () => {
    return setState({
      ...state,
      select: !select,
    })
  }

  const handleCheck = () => {
    const checkProvince = validateProvince(province)
    const checkCity = validateCity(city)
    const checkZip = validateZipCode(zipCode)

    let checkPostal
    if (optional) {
      checkPostal = validatePostalCode(postal1 + "-" + postal2)
    }

    if (typeof checkProvince === "string") {
      return
    }

    if (typeof checkCity === "string") {
      return
    }

    if (typeof checkZip === "string") {
      return
    }

    if (typeof checkPostal === "string" && optional) {
      return
    }

    if (optional) {
      continueRegister({
        location,
        province,
        city,
        floor,
        zipCode,
        country,
        postalCode: postal1 + "-" + postal2,
      })
      return
    } else {
      continueRegister({
        location,
        province,
        city,
        floor,
        zipCode,
        country,
      })
    }
  }

  useEffect(() => {
    if (check === false) {
      if (
        location.length !== 0 &&
        province.length !== 0 &&
        floor.length !== 0 &&
        city.length !== 0 &&
        zipCode.length !== 0 &&
        country === "US"
      ) {
        if (optional === true) {
          if (postal1.length !== 0 && postal2.length !== 0) {
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
  }, [
    location,
    province,
    city,
    floor,
    zipCode,
    country,
    postal1,
    postal2,
    optional,
    check,
  ])

  return (
    <CSSTransition appear={true} in={true} timeout={300} classNames="section">
      <SectionWrapper>
        <RegisterDescription>{desc}</RegisterDescription>
        <RegisterForm>
          <GenInputContainer>
            <LabelHeader>
              <h4>Physical Address</h4>
              <CSSTransition
                appear={true}
                in={true}
                timeout={600}
                classNames="deco"
              >
                <DecorativeBar />
              </CSSTransition>
            </LabelHeader>
            <InputWrapper>
              <input
                type="text"
                name="location"
                value={location}
                onChange={handleChange}
                required
                minLength={5}
              />
              <label>Address</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <InputDivision>
            <Division>
              <InputWrapper>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  required
                  minLength={1}
                />
                <label>City</label>
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </InputWrapper>
            </Division>
            <Division>
              <InputWrapper>
                <input
                  type="text"
                  name="floor"
                  value={floor}
                  onChange={handleChange}
                  required
                  minLength={1}
                />
                <label>Floor / etc. </label>
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </InputWrapper>
            </Division>
          </InputDivision>
          <InputDivision>
            <Division
              style={{
                alignSelf: select ? "flex-start" : "center",
              }}
            >
              <InputWrapper>
                <input
                  type="text"
                  name="zipCode"
                  value={zipCode}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={5}
                />
                <label>Zipcode</label>
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </InputWrapper>
            </Division>
            <Division>
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
                      color: provName === "" ? "#888" : "#f76918",
                    }}
                  >
                    {province === "" ? "State / Province" : provName}
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
                      {provinces.map((elem, ind) => {
                        return (
                          <Option key={ind}>
                            <div>
                              <label>{elem[0]}</label>
                              <input
                                type="radio"
                                name="province"
                                checked={province === [elem[1]]}
                                value={elem[1]}
                                onChange={(e) => handleSelChange(elem[0], e)}
                              />
                            </div>
                          </Option>
                        )
                      })}
                    </OptionWrapper>
                  </CSSTransition>
                ) : null}
              </SelectWrapper>
            </Division>
          </InputDivision>
          <GenInputContainer
            style={{
              width: "100%",
              alignItems: "flex-end",
            }}
          >
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
                Additional Information
              </h3>
              <button type="button" onClick={handleOptional} />
            </OptionButton>
          </GenInputContainer>
          {optional ? (
            <>
              <LabelHeader
                style={{
                  paddingLeft: "1rem",
                }}
              >
                <h4>Postal Code</h4>
                <CSSTransition
                  appear={true}
                  in={true}
                  timeout={600}
                  classNames="deco"
                >
                  <DecorativeBar />
                </CSSTransition>
              </LabelHeader>
              <GenInputContainer
                style={{
                  width: "100%",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                }}
              >
                <InputMed
                  ref={postalOne}
                  type="text"
                  name="postal1"
                  value={postal1}
                  onChange={handleChange}
                  required
                  minLength={5}
                  maxLength={5}
                  style={{
                    margin: "0",
                  }}
                />
                <CSSTransition
                  appear={true}
                  in={true}
                  timeout={400}
                  classNames="post"
                >
                  <PostBar />
                </CSSTransition>
                <InputSm
                  ref={postalTwo}
                  type="text"
                  name="postal2"
                  value={postal2}
                  onChange={handleChange}
                  required
                  minLength={4}
                  maxLength={4}
                  style={{
                    margin: "0",
                  }}
                />
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </GenInputContainer>
            </>
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

export default SectionTwo
