const dobModify = (day, month, year) => {
  let dayStr, monStr

  if (day.length === 1) {
    dayStr = "0" + day
  } else {
    dayStr = day
  }

  if (month.length === 1) {
    monStr = "0" + month
  } else {
    monStr = month
  }

  return monStr + "-" + dayStr + "-" + year
}

export default dobModify
