import { SHOW_ERROR } from '../constants'

const handleActionError = (dispatch, error, source) => {
  return dispatch({
    type: SHOW_ERROR,
    source,
    payload: error
  })
}

export default handleActionError
