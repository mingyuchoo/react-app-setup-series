import createReducer from '../utils/createReducer'
import {
  STARTING_REQUEST,
  FINISHED_REQUEST
} from '../constants'

// 사용 안 하는 걸로..
// import createReducer from '../utils/createReducer'

const initialState = {
  fetching: false,
  data: {}
}

export default function graphql(state = initialState, action) {
  switch (action.type) {
    case STARTING_REQUEST:
      return {
        ...state,
        fetching: true
      }
    case FINISHED_REQUEST:
      return {
        ...state,
        fetching: false,
        data: action.response.data
      }
    default:
      return state
  }
}
