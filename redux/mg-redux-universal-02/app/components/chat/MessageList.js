import React, { Component, PropTypes } from 'react'

export default class MessageList extends Component {

  constructor(props) {
    super(props)
  }

  componentDidUpdate() {
    const a = this.refs.messageList
    a.scrollTop = a.scrollHeight
  }

  render() {
    return (
      <ul className="scroll" ref="messageList">
        {
          this.props.messages.map((message, i) => (
            <li key={i}>
              [ <strong>{message.id}</strong> <small>{message.time}</small> ]
              {' '}{message.text}
            </li>
          ))
        }
      </ul>
    )
  }
}

MessageList.propTypes = {
  user: PropTypes.object,
  messages: PropTypes.array
}
