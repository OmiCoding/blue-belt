import {
  CONTINUE_REGISTER,
  NEXT_SECTION,
  VERIFY,
  SUCCESS,
  HANDLE_SELECTION,
} from "./types"

const registerReducer = (state, action) => {
  switch (action.type) {
    case CONTINUE_REGISTER:
      return {
        ...state,
        ...action.payload,
      }

    case HANDLE_SELECTION: {
      return {
        ...state,
        select: action.payload,
      }
    }

    case NEXT_SECTION: {
      return {
        ...state,
        index: state.index + 1,
      }
    }

    case VERIFY: {
      return {
        ...state,
        verify: !state.verify,
      }
    }

    case SUCCESS: {
      return {
        ...state,
        success: !state.success,
      }
    }

    default:
      return state
  }
}

export default registerReducer
