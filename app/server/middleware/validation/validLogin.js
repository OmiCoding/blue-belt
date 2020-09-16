export const validateLoginPass = function (str1) {
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

export const validateLoginEmail = function (str1) {
  if (
    !/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      str1
    )
  ) {
    return false
  }
  return true
}
