// import { parsePhoneNumberFromString } from "libphonenumber-js"
/* 
  Note: Make sure that user and password is trimmed before 
  using any of these validation methods
*/

export const signInValidation = ({ email, password }) => {
  // if (user.length < 1) return false
  if (email.length < 1) return false
  if (password.length < 1) return false

  // const checkUser = user.length === 0 ? false : validateUser(user)
  const checkPass = password.length === 0 ? false : validatePass(password)
  const checkEmail = email.length === 0 ? false : validateEmail(email)

  // if (checkUser) return false
  if (typeof checkPass === "string") return checkPass
  if (typeof checkEmail === "string") return checkEmail

  return true
}

export const validateName = (name) => {
  if (name.length < 2) {
    return "The name is too short."
  }
  if (/\s/.test(name)) {
    return "The name is invalid."
  }
  if (!/^[A-Z][a-z]*$/.test(name)) {
    return "The name is invalid."
  }
  return true
}

export const validateCompanyName = (name) => {
  if (name.length < 2) {
    return "The name is too short."
  }
  if (!/^[A-Z][A-Za-z\s]*$/.test(name)) {
    return "The name is invalid."
  }

  return true
}

export const validateEmail = (email, confirmEmail) => {
  if (email.length !== confirmEmail.length) {
    return "The emails do not match."
  }

  if (email !== confirmEmail) {
    return "The emails do not match."
  }

  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      email
    )
  ) {
    return "The email is invalid."
  } else {
    return true
  }
}

export const validateLoginEmail = (email) => {
  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      email
    )
  ) {
    return "The email is invalid."
  } else {
    return true
  }
}

// export const validatePhone = (user) => {
//   const phoneNumber = parsePhoneNumberFromString(user, "US")
//   if (phoneNumber.isValid() === false) {
//     return "Phone number is invalid."
//   } else {
//     return true
//   }
// }

export const validateUser = (user) => {
  if (user.length < 3) {
    return "Username is too short."
  }
  if (/\s/.test(user)) {
    return "Username can't have white spaces."
  }
  if (!/[A-Za-z0-9._]/.test(user)) {
    return "Username has invalid characters. Only '.' and '_' are valid."
  }
  return true
}

export const validatePass = (password, confirmPass) => {
  if (password.length !== confirmPass.length) {
    return "The passwords don't match."
  }

  if (password !== confirmPass) {
    return "The passwords don't match."
  }

  if (password.length < 8) {
    return "Password is too short."
  }
  if (/\s/.test(password)) {
    return "Password can't have white spaces."
  }
  if (!/[A-Z]/.test(password)) {
    return "At least one uppercase letter."
  }
  if (!/[a-z]/.test(password)) {
    return "At least one lowercase letter."
  }
  if (!/[!@%+#$')(}{?~^,:_.\-]/.test(password)) {
    return "At least one special character."
  }
  return true
}

export const validateLoginPass = (password) => {
  if (password.length < 8) {
    return "Password is too short."
  }
  if (/\s/.test(password)) {
    return "Password can't have white spaces."
  }
  if (!/[A-Z]/.test(password)) {
    return "At least one uppercase letter."
  }
  if (!/[a-z]/.test(password)) {
    return "At least one lowercase letter."
  }
  if (!/[!@%+#$')(}{?~^,:_.\-]/.test(password)) {
    return "At least one special character."
  }
  return true
}

export const validateDOB = (day, month, year) => {
  let checkDay, checkMon, checkYear
  let regex = /0/gi
  let yearRgx = /^0/gi
  let minusRgx = /\-/gi

  if (minusRgx.test(day)) {
    return "The day is invalid."
  } else if (regex.test(day)) {
    let check = day.replace(regex, "")
    check = parseInt(check)
    if (Number.isNaN(check)) {
      return "The date of birth is invalid."
    }
  } else if (Number.isNaN(parseInt(day))) {
    return "The date of birth is invalid."
  }

  if (minusRgx.test(month)) {
    return "The month is invalid."
  } else if (regex.test(month)) {
    let check = month.replace(regex, "")
    check = parseInt(check)

    if (Number.isNaN(check)) {
      return "The date of birth is invalid."
    }
  } else if (Number.isNaN(parseInt(month))) {
    return "The date of birth is invalid."
  }

  checkMon = parseInt(month)
  checkDay = parseInt(day)

  if (checkMon === 4 || checkMon === 6 || checkMon === 9 || checkMon === 11) {
    if (checkDay < 0 || checkDay > 30) {
      return "Invalid day."
    }
  } else if (checkMon === 2) {
    if (checkDay < 0 || checkDay > 28) {
      return "Invalid day."
    }
  } else {
    if (checkDay < 0 || checkDay > 31) {
      return "Invalid day."
    }
  }

  if (minusRgx.test(year)) {
    return "The year is invalid."
  } else if (yearRgx.test(year)) {
    return "The year is invalid."
  } else if (Number.isNaN(parseInt(year))) {
    return "The date of birth is invalid."
  }

  checkYear = parseInt(year)

  let currYear = new Date()
  currYear = currYear.getFullYear()

  if (currYear - checkYear > 100) {
    return "The year you placed is beyond 100 years."
  }

  return true
}

export const validateSex = (string) => {
  if (string.length === 0) {
    return "Please choose a sex."
  }

  if (/![male|female]/.test(string)) {
    return "Please choose a sex."
  }

  return true
}

export const validateProvince = (province) => {
  if (province.length !== 2) {
    return "This state is invalid."
  }

  if (
    !/AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY/.test(
      province
    )
  ) {
    return "That state does not exist."
  }

  return true
}

export const validateCity = (city) => {
  if (city.length < 1) {
    return "Please enter the city."
  }

  if (!/[a-zA-Z0-9]+(?:[ '-][a-zA-Z0-9]+)*/.test(city)) {
    return "City name is invalid."
  }

  return true
}

export const validateZipCode = (zipCode) => {
  if (zipCode.length !== 5) {
    return "This zipcode is invalid."
  }

  if (Number.isNaN(parseInt(zipCode))) {
    return "This zipcode is invalid."
  }

  return true
}

export const validatePostalCode = (postalCode) => {
  if (postalCode.length !== 10) {
    return "The postal code is invalid."
  }

  if (!/\-/.test(postalCode)) {
    return "The postal code is invalid."
  }

  const zipCodes = postalCode.split("-")

  if (zipCodes[0].length !== 5) {
    return "The postal code is invalid."
  }

  if (zipCodes[1].length !== 4) {
    console.log(4)
    return "The postal code is invald."
  }

  if (Number.isNaN(parseInt(zipCodes[0]))) {
    console.log(5)
    return "The postal code is invalid."
  }

  if (Number.isNaN(parseInt(zipCodes[1]))) {
    console.log(6)
    return "The postal code is invalid."
  }

  return true
}

export const validateEmployment = function (value) {
  if (typeof value !== "boolean") {
    return "Invalid value"
  }

  return true
}
