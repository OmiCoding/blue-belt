import React, { useState, useContext, useRef, useEffect } from "react"

import { CSSTransition } from "react-transition-group"

import RegisterContext from "../../../context/registerContext/RegisterContext"

import { RegisterDescription } from "../../../../client/styles/register/RegisterStyles"
import {
  RegisterForm,
  LabelHeader,
  GenInputContainer,
  InputSm,
  InputMed,
  RegisterButton,
  DecorativeBar,
  PhoneContainer,
} from "../../../../client/styles/register/SectionStyles"

import {
  InputWrapper,
  DotContainer,
  Dot1,
  Dot2,
  Dot3,
} from "../../../../client/styles/general/GeneralStyles"

import {
  validateUser,
  validateEmail,
  validatePhone,
  validatePass,
} from "../../../../client/validation/accValidation"

const SectionFour = ({ desc }) => {
  const [state, setState] = useState({
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPass: "",
    phone1: "",
    phone2: "",
    phone3: "",
    check: false,
  })

  const {
    username,
    email,
    confirmEmail,
    password,
    confirmPass,
    phone1,
    phone2,
    phone3,
    check,
  } = state

  const phoneRef1 = useRef(null)
  const phoneRef2 = useRef(null)
  const phoneRef3 = useRef(null)

  const registerContext = useContext(RegisterContext)

  const { registerVerify } = registerContext

  const handleChange = (event) => {
    const { name, value } = event.target

    if (name === "phone1" && value.length === 3) {
      if (phone2.length !== 3) {
        phoneRef2.current.focus()
      } else if (phone3.length !== 4) {
        phoneRef3.current.focus()
      }
    }
    if (name === "phone2" && value.length === 3) {
      if (phone1.length !== 3) {
        phoneRef1.current.focus()
      } else if (phone3.length !== 4) {
        phoneRef3.current.focus()
      }
    }
    if (name === "phone3" && value.length === 4) {
      if (phone1.length !== 3) {
        phoneRef1.current.focus()
      } else if (phone2.length !== 3) {
        phoneRef2.current.focus()
      }
    }

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleBackgroundIn = (event) => {
    if (check === true) {
      event.target.background = "#37b6fe"
    }
  }
  const handleBackgroundOut = (event) => {
    if (check === true) {
      event.target.background = "#34adf1"
    }
  }

  const handleRegister = () => {
    const checkUser = validateUser(username)
    const checkPass = validatePass(password, confirmPass)
    const checkEmail = validateEmail(email, confirmEmail)
    

    if (typeof checkUser === "string") {
      return
    }

    if (typeof checkPass === "string") {
      return
    }

    if (typeof checkEmail === "string") {
      return
    }

 

    registerVerify({
      username,
      password,
      confirmPass,
      email,
      confirmEmail,
      phone: "+" + "1" + phone1 + phone2 + phone3,
    })
  }

  useEffect(() => {
    if (check === false) {
      if (
        username.length !== 0 &&
        password.length !== 0 &&
        email.length !== 0 &&
        confirmPass.length !== 0 &&
        confirmEmail.length !== 0 &&
        phone1.length !== 0 &&
        phone2.length !== 0 &&
        phone3.length !== 0
      ) {
        setState({
          ...state,
          check: true,
        })
      }
    }
  }, [
    check,
    confirmPass,
    password,
    email,
    confirmEmail,
    username,
    phone1,
    phone2,
    phone3,
  ])

  return (
    <CSSTransition appear={true} in={true} timeout={300} classNames="section">
      <>
        <RegisterDescription>{desc}</RegisterDescription>
        <RegisterForm>
          <GenInputContainer>
            <LabelHeader>
              <h4>Account Details</h4>
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
                name="username"
                value={username}
                onChange={handleChange}
                required
                minLength={3}
                maxLength={120}
              />
              <label htmlFor="username">Username</label>
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
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
            <InputWrapper>
              <input
                type="text"
                name="confirmEmail"
                value={confirmEmail}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmEmail">Confirm Email</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
            <InputWrapper>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
              <label htmlFor="password">Password</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
            <InputWrapper>
              <input
                type="password"
                name="confirmPass"
                value={confirmPass}
                onChange={handleChange}
                required
              />
              <label htmlFor="confirmPass">Confirm Password</label>
              <DotContainer>
                <Dot1 />
                <Dot2 />
                <Dot3 />
              </DotContainer>
            </InputWrapper>
          </GenInputContainer>
          <GenInputContainer>
            <LabelHeader>
              <h4>Phone Number</h4>
              <CSSTransition
                in={true}
                appear={true}
                timeout={600}
                classNames="deco"
              >
                <DecorativeBar />
              </CSSTransition>
            </LabelHeader>
            <PhoneContainer>
              <InputSm
                ref={phoneRef1}
                type="text"
                name="phone1"
                value={phone1}
                minLength={3}
                maxLength={3}
                onChange={handleChange}
                required
                style={{
                  marginRight: "0.4rem",
                }}
              />
              <InputSm
                ref={phoneRef2}
                type="text"
                name="phone2"
                value={phone2}
                minLength={3}
                maxLength={3}
                onChange={handleChange}
                required
                style={{
                  marginLeft: "0.4rem",
                  marginRight: "0.4rem",
                }}
              />
              <InputMed
                ref={phoneRef3}
                type="text"
                name="phone3"
                value={phone3}
                minLength={4}
                maxLength={4}
                onChange={handleChange}
                required
                style={{
                  marginLeft: "0.4rem",
                }}
              />
            </PhoneContainer>
          </GenInputContainer>
          <RegisterButton>
            <button
              type="button"
              style={{
                backgroundColor: check ? "#34adf1" : "#ddd",
                color: check ? "#fcfcfc" : "#555",
              }}
              onClick={() => handleRegister()}
              onMouseEnter={handleBackgroundIn}
              onMouseLeave={handleBackgroundOut}
              disabled={!check}
            >
              Register
            </button>
          </RegisterButton>
        </RegisterForm>
      </>
    </CSSTransition>
  )
}

export default SectionFour
