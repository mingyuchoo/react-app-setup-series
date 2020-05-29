import {
  NEW_MESSAGE,
  ADD_MESSAGE,
  CHAT_HISTORY,
  RECEIVE_SOCKET
} from '../constants'

const initialState = {
  messages: [
    {
      id: null,
      socketID: null,
      time: null,
      text: null,
    }
  ]
}

const chat = (state=initialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      }
    case CHAT_HISTORY:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message
        ]
      }
    case RECEIVE_SOCKET:
      return {
        messages: [
          {
            id: action.id,
            socketID: action.socketID,
          }
        ]
      }
    default:
      return state
  }
}

export default chat
