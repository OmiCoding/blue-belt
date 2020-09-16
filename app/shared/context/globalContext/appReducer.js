import { AUTH_ACCOUNT, GENERAL_ERROR, HANDLE_CHOICE } from "./types"

const appReducer = (state, action) => {
  switch (action.type) {
    case AUTH_ACCOUNT:
      return {
        ...state,
        ...action.payload,
        menuChoice: action.payload.role === "company" ? "postings" : "jobs",
      }
    case HANDLE_CHOICE:
      return {
        ...state,
        menuChoice: action.payload.toLowerCase(),
      }
    case GENERAL_ERROR:
      return state

    default:
      return state
  }
}

export default appReducer
