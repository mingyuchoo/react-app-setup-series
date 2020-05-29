import {
  NEW_MESSAGE,
  ADD_MESSAGE,
  CHAT_HISTORY,
  RECEIVE_SOCKET
} from '../constants'

export const newMessage = (message) => {
  return {
    type: NEW_MESSAGE,
    message
  }
}

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message
  }
}

export const addHistory = (messages) => {
  return {
    type: CHAT_HISTORY,
    messages
  }
}
export const receiveSocket = (id, socketID) => {
  return {
    type: RECEIVE_SOCKET,
    id,
    socketID
  }
}
