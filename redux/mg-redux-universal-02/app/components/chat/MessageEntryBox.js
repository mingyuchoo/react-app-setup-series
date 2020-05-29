import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import moment from 'moment'

export default class MessageEntryBox extends Component {

  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()
    let input = ReactDOM.findDOMNode(this.refs.messageInput)
    let message = {}
    let text = input.value.trim()
    if (text.length > 0) {
      message = {
        id: this.props.id,
        socketID: this.props.socketID,
        time: moment.utc().format('lll'),
        text: text
      }
      this.props.socket.emit('new message', message)
      input.value = ''
    }
  }

  render() {
    return (
      <div className="box">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="medium-10 columns">
              <input ref="messageInput" type="text" />
            </div>
            <div className="medium-2 columns">
              <button className="button expanded">Send</button>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

MessageEntryBox.propTypes = {
  id: PropTypes.string,
  socketID: PropTypes.string,
  newMessage: PropTypes.func,
  socket: PropTypes.object
}
