const breakpoints = {
  tiny: "300",
  iphoneSE: "320",
  small: "375",
  phoneMed: "487",
  phoneLg: "530",
  tablet: "768",
  tabletLg: "992",
  iPadPro: "1024",
  desktopS: "1200",
  desktopM: "1600",
  desktopL: "1920",
  desktopXL: "2560",
}

function mq(device, bounds, mode = "portrait") {
  const bpArray = Object.keys(breakpoints).map(function bpValues(bpKey) {
    return [bpKey, breakpoints[bpKey]]
  })

  const [result] = bpArray.reduce(function makeQuery(acc, [name, size]) {
    if (name === device) {
      return [...acc, `@media screen and (${bounds}-width: ${size}px)`]
    }
    return acc
  }, [])

  return result
}

export default mq
