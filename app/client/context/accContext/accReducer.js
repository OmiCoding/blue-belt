import { GET_ACC_DETAILS, GET_USERNAME, END_INIT, GENERAL_ERROR } from "./types"

const workerReducer = (state, action) => {
  switch (action.type) {
    case GET_ACC_DETAILS:
      return {
        ...state,
        ...action.payload,
        init: false,
      }

    case GET_USERNAME:
      return {
        ...state,
        ...action.payload,
        init: false,
      }

    case END_INIT:
      return {
        ...state,
        init: false,
      }
    case GENERAL_ERROR:
      return state
    default:
      return state
  }
}

export default workerReducer
