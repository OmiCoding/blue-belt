import React, { useReducer } from "react"
import axios from "axios"

import RegisterContext from "./RegisterContext"
import {
  NEXT_SECTION,
  CONTINUE_REGISTER,
  VERIFY,
  SUCCESS,
  HANDLE_SELECTION,
} from "./types"
import registerReducer from "./registerReducer"

const RegisterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(registerReducer, {
    name: "",
    fName: "",
    lName: "",
    username: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPass: "",
    phone: "",
    career: "",
    education: "NA",
    experience: "",
    educated: false,
    choice: "",
    location: "",
    delivery: "",
    province: "",
    city: "",
    aptSuite: "",
    floor: "",
    zipCode: "XXXXX",
    postalCode: "XXXXX-XXXX",
    country: "US",
    dob: "",
    sex: "",
    gender: "",
    prefName: "",
    index: 0,
    verify: false,
    trigger: false,
    success: false,
    select: "",
    choices: [
      "Word of mouth",
      "Internet Search",
      "Social Media",
      "Friend",
      "Other",
    ],
    sections: [
      ["Great! Let us start with filling out the following information.", 1],
      ["We are making progress! Please fill out your address below.", 2],
      ["Almost there to get you started...", 3],
      ["We're at the finish line.", 4],
    ],
    provinces: [
      ["Alabama", "AL"],
      ["Alaska", "AK"],
      ["Arizona", "AZ"],
      ["Arkansas", "AR"],
      ["California", "CA"],
      ["Colorado", "CO"],
      ["Connecticut", "CT"],
      ["Delaware", "DE"],
      ["Florida", "FL"],
      ["Georgia", "GA"],
      ["Hawaii", "HI"],
      ["Idaho", "ID"],
      ["Illinois", "IL"],
      ["Indiana", "IN"],
      ["Iowa", "IA"],
      ["Kansas", "KS"],
      ["Kentucky", "KY"],
      ["Louisiana", "LA"],
      ["Maine", "ME"],
      ["Maryland", "MD"],
      ["Massachusetts", "MA"],
      ["Michigan", "MI"],
      ["Minnesota", "MN"],
      ["Mississippi", "MS"],
      ["Missouri", "MO"],
      ["Montana", "MT"],
      ["Nebraska", "NE"],
      ["Nevada", "NV"],
      ["New Hampshire", "NH"],
      ["New Jersey", "NJ"],
      ["New Mexico", "NM"],
      ["New York", "NY"],
      ["North Carolina", "NC"],
      ["North Dakota", "ND"],
      ["Ohio", "OH"],
      ["Oklahoma", "OK"],
      ["Oregon", "OR"],
      ["Pennsylvania", "PA"],
      ["Rhode Island", "RI"],
      ["South Carolina", "SC"],
      ["South Dakota", "SD"],
      ["Tennessee", "TN"],
      ["Texas", "TX"],
      ["Utah", "UT"],
      ["Vermont", "VT"],
      ["Virginia", "VA"],
      ["Washington", "WA"],
      ["West Virgina", "WV"],
      ["Wisconsin", "WI"],
      ["Wyoming", "WY"],
    ],
  })

  const {
    name,
    fName,
    lName,
    username,
    email,
    confirmEmail,
    password,
    confirmPass,
    phone,
    career,
    education,
    experience,
    employed,
    choice,
    province,
    city,
    delivery,
    location,
    zipCode,
    postalCode,
    floor,
    aptSuite,
    country,
    dob,
    sex,
    gender,
    prefName,
    index,
    trigger,
    verify,
    success,
    select,
    choices,
    provinces,
    sections,
  } = state

  const continueRegister = (data) => {
    dispatch({ type: CONTINUE_REGISTER, payload: { ...data } })
    dispatch({ type: NEXT_SECTION })
  }

  const registerVerify = (data) => {
    dispatch({ type: CONTINUE_REGISTER, payload: { ...data } })
    dispatch({ type: VERIFY })
  }

  const handleSelection = (data) => {
    dispatch({ type: HANDLE_SELECTION, payload: data })
  }

  const registerCompany = () => {
    axios
      .request("/register/company", {
        method: "post",
        baseURL: "https://blubelt.com/",
        data: {
          username,
          email,
          confirmEmail,
          password,
          confirmPass,
          phone,
          name,
          location,
          floor,
          city,
          province,
          country,
          zipCode,
          postalCode,
          choice,
          select,
        },
        responseType: "json",
      })
      .then((res) => {
        return res.data
      })
      .then((res) => {
        dispatch({ type: SUCCESS })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  const registerWorker = () => {
    console.log(state)
    axios
      .request("/register/worker", {
        method: "post",
        baseURL: "https://blubelt.com/",
        data: {
          username,
          email,
          confirmEmail,
          password,
          confirmPass,
          phone,
          fName,
          lName,
          career,
          education,
          experience,
          employed,
          delivery,
          city,
          aptSuite,
          zipCode,
          postalCode,
          province,
          country,
          dob,
          sex,
          gender,
          prefName,
          choice,
          select,
        },
        responseType: "json",
      })
      .then((res) => {
        return res.data
      })
      .then((res) => {
        dispatch({ type: SUCCESS })
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <RegisterContext.Provider
      value={{
        name,
        fName,
        lName,
        username,
        email,
        confirmEmail,
        password,
        confirmPass,
        phone,
        career,
        education,
        experience,
        employed,
        choice,
        province,
        city,
        delivery,
        zipCode,
        postalCode,
        aptSuite,
        floor,
        country,
        dob,
        sex,
        gender,
        prefName,
        index,
        trigger,
        verify,
        success,
        select,
        choices,
        provinces,
        sections,
        continueRegister: continueRegister,
        registerWorker: registerWorker,
        registerCompany: registerCompany,
        registerVerify: registerVerify,
        handleSelection: handleSelection,
        dispatch,
      }}
    >
      {children}
    </RegisterContext.Provider>
  )
}

export default RegisterProvider
