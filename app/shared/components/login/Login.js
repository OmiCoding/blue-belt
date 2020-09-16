import React, { useState, useContext } from "react"

import { Link } from "react-router-dom"

import { useHistory } from "react-router-dom"
import axios from "axios"

import AppContext from "../../context/globalContext/AppContext"
import {
  validateLoginPass,
  validateLoginEmail,
} from "../../../client/validation/accValidation"
import {
  LoginLayout,
  LoginFormContainer,
  LoginForm,
  Description,
  Title,
  LoginButton,
  InputContainer,
  LoginHeader,
  RadioWrapper,
  WorkerRadio,
  CompanyRadio,
  LinkContainer,
  SVGContainer,
  HorizontalBar,
  Circle,
} from "../../../client/styles/login/LoginStyles"

import {
  InputWrapper,
  DotContainer,
  Dot1,
  Dot2,
  Dot3,
} from "../../../client/styles/general/GeneralStyles"
import GlobalLayout from "../GlobalLayout"

import toolsSVG from "../../../client/assets/tools-opti.svg"

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
    choice: "",
  })

  const appContext = useContext(AppContext)

  const { authenticated, role } = appContext

  let history = useHistory()

  if (authenticated === true) {
    if (role === "worker") {
      history.push("/dashboard/worker")
    } else if (role === "company") {
      history.push("/dashboard/company")
    }
  }

  const { email, password, choice } = state

  const handleChange = async (event) => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (choice === "") {
      return
    }

    const checkPass = validateLoginPass(password)

    const checkEmail = validateLoginEmail(email)

    if (typeof checkPass === "string" || typeof checkEmail === "string") {
      return setState({
        ...state,
        password: "",
      })
    }

    axios(`/login/${choice}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      baseURL: "https://blubelt.com/",
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      // eslint-disable-next-line no-unused-vars
      .then(({ data }) => {
        return history.push(`/dashboard/${choice}/${data.username}`)
      })
      // eslint-disable-next-line no-unused-vars
      .catch((err) => {
        // TODO: Activate a message if it fails
        setState({
          ...state,
          password: "",
        })
      })
  }

  return (
    <GlobalLayout>
      <SVGContainer
        style={{
          backgroundImage: `url("/web/assets/tools-opti.svg")`,
        }}
      />
      <LoginLayout>
        <LoginFormContainer>
          <LoginHeader>blubelt</LoginHeader>
          <Description>Login to continue to:</Description>
          <Title>blubelt</Title>
          <LoginForm onSubmit={handleSubmit}>
            <InputContainer>
              <InputWrapper>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
                <label>Email</label>
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </InputWrapper>
            </InputContainer>
            <InputContainer>
              <InputWrapper>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <label>Password</label>
                <DotContainer>
                  <Dot1 />
                  <Dot2 />
                  <Dot3 />
                </DotContainer>
              </InputWrapper>
            </InputContainer>
            <InputContainer>
              <RadioWrapper>
                <WorkerRadio htmlFor="worker">
                  Worker
                  <input
                    type="radio"
                    name="choice"
                    value="worker"
                    checked={choice === "worker"}
                    onChange={handleChange}
                  />
                  <span />
                </WorkerRadio>
                <CompanyRadio htmlFor="company">
                  Company
                  <input
                    type="radio"
                    name="choice"
                    value="company"
                    checked={choice === "company"}
                    onChange={handleChange}
                  />
                  <span />
                </CompanyRadio>
              </RadioWrapper>
            </InputContainer>
            <LoginButton type="submit">Log In</LoginButton>
          </LoginForm>
          <HorizontalBar />
          <LinkContainer>
            {/* Until email confirmation is created */}
            <Link to="/register">{"Can't Log In?"}</Link>
            <Circle />
            <Link to="/register">Sign up for an account</Link>
          </LinkContainer>
          <LinkContainer>
            <Link to="/home">Privacy Policy</Link>
            <Circle />
            <Link to="/home">User Notice</Link>
          </LinkContainer>
        </LoginFormContainer>
      </LoginLayout>
    </GlobalLayout>
  )
}

export default Login
