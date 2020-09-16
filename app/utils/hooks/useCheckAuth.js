import { useEffect } from "react"

const useCheckAuth = (setUp) => {
  useEffect(() => {
    setUp()
  }, [setUp])
}

export default useCheckAuth
