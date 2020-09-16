import { useEffect } from "react"

const useResize = (device, desktopLg, changeState) => {
  useEffect(() => {
    function menuDirection() {
      if (window.innerWidth >= 1200 && window.innerWidth < 1920) {
        if (device === "mobile") {
          changeState((prevState) => {
            return {
              ...prevState,
              device: "desktop",
              desktopLg: false,
            }
          })
          return
        } else if (device === "desktop" && desktopLg === true) {
          changeState((prevState) => {
            return {
              ...prevState,
              device: "desktop",
              desktopLg: false,
            }
          })
          return
        }
      } else if (window.innerWidth >= 1920) {
        if (device === "mobile") {
          changeState((prevState) => {
            return {
              ...prevState,
              device: "desktop",
              desktopLg: true,
            }
          })
          return
        } else if (device === "desktop" && desktopLg === false) {
          changeState((prevState) => {
            return {
              ...prevState,
              device: "desktop",
              desktopLg: true,
            }
          })
        }
      } else if (window.innerWidth < 1200) {
        if (device === "desktop") {
          changeState((prevState) => {
            return {
              ...prevState,
              device: "mobile",
              desktopLg: false,
            }
          })
        }
      }
    }

    if (device === null) {
      if (window.innerWidth >= 1200 && window.innerWidth < 1920) {
        changeState((prevState) => {
          return {
            ...prevState,
            device: "desktop",
            desktopLg: false,
          }
        })
        return
      } else if (window.innerWidth >= 1200 && window.innerWidth >= 1920) {
        changeState((prevState) => {
          return {
            ...prevState,
            device: "desktop",
            desktopLg: true,
          }
        })
        return
      } else if (window.innerWidth < 1200) {
        changeState((prevState) => {
          return {
            ...prevState,
            device: "mobile",
            desktopLg: false,
          }
        })
        return
      }
    }

    window.addEventListener("resize", menuDirection)

    return () => {
      window.removeEventListener("resize", menuDirection)
    }
  }, [device])
}

export default useResize

// if (
//   device === "mobile" &&
//   window.innerWidth >= 1920 &&
//   desktopLg === false
// ) {
//   changeState((prevState) => {
//     return {
//       ...prevState,
//       device: "desktop",
//       desktopLg: true,
//     }
//   })
//   return
// } else if (
//   device === "mobile" &&
//   window.innerWidth < 1920 &&
//   desktopLg === false
// ) {
//   changeState((prevState) => {
//     return {
//       ...prevState,
//       device: "desktop",
//       desktopLg: false,
//     }
//   })
//   return
// } else if (
//   device === "desktop" &&
//   window.innerWidth >= 1920 &&
//   desktopLg === false
// ) {
//   changeState((prevState) => {
//     return {
//       ...prevState,
//       device: "desktop",
//       desktopLg: true,
//     }
//   })
//   return
// } else if (
//   device === "desktop" &&
//   window.innerWidth < 1920 &&
//   desktopLg === true
// ) {
//   changeState((prevState) => {
//     return {
//       ...prevState,
//       device: "desktop",
//       desktopLg: false,
//     }
//   })
//   return
// }
