import * as storage from './storage'
import { LOGGED_IN, LOG_OUT } from '../constants'

// export default function persistenceHandler (next) {
const persistenceHandler = (next) => {
  return (reducer, initialState) => {
    const store = next(reducer, initialState)

    return Object.assign({}, store, {
      dispatch (action) {
        store.dispatch(action)
        storage.put('locale', store.getState().application.locale)

        if (action.type === LOGGED_IN)
          storage.put('token', action.payload.token)

        if (action.type === LOG_OUT)
          storage.remove('token')

        return action
      }
    })
  }
}

export default persistenceHandler
