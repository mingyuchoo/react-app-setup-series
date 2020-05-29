import createReducer from '../utils/createReducer'
import {
  FETCH_USER,
  FETCH_REPO,
  FETCH_USER_STARGAZERS,
  FETCH_REPO_STARGAZERS
} from '../constants'

// 사용 안 하는 걸로..
// import createReducer from '../utils/createReducer'

const initialState = {
  user: {},
  repo: {},
  stargazers: {
    user: [],
    repo: [],
    pagination: {}
  }
}

export default function github(state = initialState, action) {
  switch (action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.user
      }
    case FETCH_REPO:
      return {
        ...state,
        repo: action.repo
      }
    case FETCH_USER_STARGAZERS:
      return {
        ...state,
        stargazers: Object.assign({}, state.stargazers, {
          user: action.stargazers,
          pagination: action.pagination
        })
      }
    case FETCH_REPO_STARGAZERS:
      return {
        ...state,
        stargazers: Object.assign({}, state.stargazers, {
          repo: action.stargazers,
          pagination: action.pagination
        })
      }
    default:
      return state
  }
}
