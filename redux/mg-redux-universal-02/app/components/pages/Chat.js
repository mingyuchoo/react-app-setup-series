import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import MessageList from '../chat/MessageList'
import MessageEntryBox from '../chat/MessageEntryBox'
import * as chatActions from '../../actions/chat'
import io from 'socket.io-client'

const socketClient = io(`${location.protocol}//${location.host}`)

class Chat extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: Math.random().toString(36).substr(2, 5)
    }
  }


  componentDidMount() {
    socketClient.emit('chat mounted', this.state.id)

    socketClient.on('receive socket', (id, socketID) => {
      console.log('>>> Chat.js > receive socket.')
      this.props.actions.receiveSocket(id, socketID)
    })

    socketClient.on('new message', (message) => {
      this.props.actions.addMessage(message)
    })
  }


  render() {
    return (
      <div>
        <MessageList messages={this.props.messages} />
        <MessageEntryBox
          id={this.state.id}
          socketID={this.state.socketID}
          newMessage={this.props.actions.newMessage}
          socket={socketClient}
        />
      </div>
    )
  }
}

Chat.propTypes = {
  messages: PropTypes.array,
  actions: PropTypes.any
}

const mapStateToProps = (state) => {
  return {
    messages: state.chat.messages
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(chatActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)
