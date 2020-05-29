import {
  LOGGED_IN,
  LOG_OUT,
  LOCALE_SWITCHED,
  SHOW_ERROR,
  HIDE_ERROR
} from '../constants'

// 사용 안 하는 걸로..
// import createReducer from '../utils/createReducer'

const initialState = {
  token: null,
  locale: 'en',
  user: {
    // TODO: have a checkbox to update the state
    // e.g.: on the login page and/or menu
    // permissions: ['manage_account']
    permissions: []
  },
  error: null
}

export default function application(state = initialState, action) {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        ...action.payload
      }
    case LOG_OUT:
      return {
        ...state,
        token: null
      }
    case LOCALE_SWITCHED:
      return {
        ...state,
        locale: action.payload
      }
    case SHOW_ERROR:
      const { payload, source } = action
      return Object.assign({}, state, {
        error: {
          source,
          message: payload.message,
          stateCode: payload.statusCode || payload.code,
          body: payload.body || (payload instanceof Error ?
            (payload.toString() + '\n' + payload.stack) : payload)
        }
      })
    case HIDE_ERROR:
      return {
        ...state,
        ...{ error: null }
      }
    default:
      return state
  }
}
