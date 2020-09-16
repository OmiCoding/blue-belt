import { useEffect } from "react"
import axios from "axios"

const useLoadFeed = (init, elem, listener, changeState) => {
  useEffect(() => {
    let element
    if (!init) {
      element = elem.current
      element.addEventListener("scroll", listener)
    } else {
      changeState((prevState) => {
        return { ...prevState, feedload: true }
      })

      axios({
        method: "get",
        url: "https://randomuser.me/api/?results=10",
        responseType: "json",
      })
        .then(({ data }) => {
          changeState((prevState) => {
            return {
              ...prevState,
              results: [...prevState.results, ...data.results],
              feedload: false,
            }
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }

    return () => {
      if (!init) {
        element.removeEventListener("scroll", listener)
        listener.cancel
      }
    }
  }, [init, listener])
}

export default useLoadFeed
