import {
  LOGGED_IN,
  LOCALE_SWITCHED,
  HIDE_ERROR,
} from '../constants'

export const login = (form, redirect) => {
  return dispatch => {
    // simulate request
    setTimeout(() => {
      const token = Math.random().toString(36).substring(7)
      dispatch({
        type: LOGGED_IN,
        payload: { token }
      })
      // Can be used to navigate to a new route
      if (redirect) redirect()
    }, 300)
  }
}

export const switchLocale = (locale) => {
  return {
    type: LOCALE_SWITCHED,
    payload: locale
  }
}

export const hideError = () => {
  return {
    type: HIDE_ERROR
  }
}
