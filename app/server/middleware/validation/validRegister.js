import { parsePhoneNumberFromString } from "libphonenumber-js"

export const validateUser = function (string) {
  if (string.length < 3) {
    return "Username is too short."
  }
  if (/\s/.test(string)) {
    return "Username can't have white spaces."
  }
  if (!/[A-Za-z0-9._]/.test(string)) {
    return "Username has invalid characters. Only '.' and '_' are valid."
  }
  return true
}

export const validatePass = function (str1, str2) {
  if (str1.length !== str2.length) {
    return "Passwords do not match."
  }

  if (str1 !== str2) {
    return "The passwords do not match."
  }

  if (str1.length < 8) {
    return "Password is too short."
  }
  if (/\s/.test(str1)) {
    return "Password can't have white spaces."
  }
  if (!/[A-Z]/.test(str1)) {
    return "At least one uppercase letter."
  }
  if (!/[a-z]/.test(str1)) {
    return "At least one lowercase letter."
  }
  if (!/[!@%+#$')(}{?~^,:_.\-]/.test(str1)) {
    return "At least one special character."
  }
  return true
}

export const validateEmail = (str1, str2) => {
  if (str1.length !== str2.length) {
    return "The emails do not match."
  }

  if (str1 !== str2) {
    return "The emails do not match."
  }

  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      str1
    )
  ) {
    return "The email is invalid."
  } else {
    return true
  }
}

export const validatePhone = function (string) {
  // For now we will only check US numbers
  try {
    const phoneNumber = parsePhoneNumberFromString(string, "US")

    if (!phoneNumber.isValid()) {
      return "Phone number is not valid."
    } else {
      return true
    }
  } catch (err) {
    return false
  }
}

export const validateName = function (string) {
  if (string.length < 2) {
    return "The name is too short."
  }
  if (/\s/.test(string)) {
    return "The name is invalid."
  }
  if (!/^[A-Z][a-z]*$/.test(string)) {
    return "The name is invalid."
  }
  return true
}

export const validateCompanyName = function (string) {
  if (string.length < 2) {
    return "The name is too short."
  }
  if (!/^[A-Z][A-Za-z\s]*$/.test(string)) {
    return "The name is invalid."
  }

  return true
}

export const validateDOB = function (string) {
  const yearRgx = /^0/gi
  const regex = /0/gi
  const minusRgx = /\-/gi
  const dob = string.split("-")

  for (let i = 0; i < dob.length; i++) {
    let str
    let number

    if (minusRgx.test(dob[i])) {
      if (i === 0) {
        return "The month is invalid."
      } else if (i === 1) {
        return "The day is invalid."
      } else {
        return " The year is invalid."
      }
    } else if (regex.test(dob[i]) && dob[i].length === 2) {
      str = dob[i].replace(regex, "")
      number = parseInt(str)
    } else {
      if (yearRgx.test(dob[i])) {
        return "The year you placed is invalid."
      }
      number = parseInt(dob[i])
    }

    if (Number.isNaN(number)) {
      return "The date of birth is invalid."
    }

    if (i === 0) {
      if (number < 0 || number > 12) {
        return "Choose between 0-12 (JAN-DEC)."
      }
    } else if (i === 1) {
      let month = dob[0].replace(regex, "")
      month = parseInt(month)

      if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (number < 0 || number > 30) {
          return "Invalid day."
        }
      } else if (month === 2) {
        if (number < 0 || number > 28) {
          return "Invalid day."
        }
      } else {
        if (number < 0 || number > 31) {
          return "Invalid day."
        }
      }
    } else if (i === 2) {
      let currYear = new Date()
      currYear = currYear.getFullYear()
      if (currYear - number > 100) {
        return "Invalid year."
      }
    }
  }

  return true
  // validate if birthday is correct
}

export const validateSex = function (string) {
  if (string.length === 0) {
    return "Please choose a sex."
  }

  if (!/[male|female]/.test(string)) {
    return "Please choose a sex."
  }

  return true
}

export const validateProvince = function (string) {
  if (string.length !== 2) {
    return "This state is invalid."
  }

  if (
    !/AL|AK|AZ|AR|CA|CO|CT|DE|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|RI|SC|SD|TN|TX|UT|VT|VA|WA|WV|WI|WY/.test(
      string
    )
  ) {
    return "That state does not exist."
  }

  return true
}

export const validateCity = function (string) {
  if (string.length < 1) {
    return "Please enter the city."
  }

  if (!/[a-zA-Z0-9]+(?:[ '-][a-zA-Z0-9]+)*/.test(string)) {
    return "City name is invalid."
  }

  return true
}

export const validateZipCode = function (string) {
  if (string.length !== 5) {
    return "This zipcode is invalid."
  }

  if (Number.isNaN(parseInt(string))) {
    return "This zipcode is invalid."
  }

  return true
}

export const validatePostalCode = function (string) {
  if (string.length !== 10) {
    return "The postal code is invalid."
  }

  if (!/\-/.test(string)) {
    return "The postal code is invalid."
  }

  const zipCodes = string.split("-")

  if (zipCodes[0].length !== 5) {
    return "The postal code is invalid."
  }

  if (zipCodes[1].length !== 4) {
    return "The postal code is invald."
  }

  if (Number.isNaN(parseInt(zipCodes[0]))) {
    return "The postal code is invalid."
  }

  if (Number.isNaN(parseInt(zipCodes[1]))) {
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
