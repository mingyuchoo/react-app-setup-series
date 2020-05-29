import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import shallowEqual from 'react-redux/lib/utils/shallowEqual'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  legend: {
    id: 'explore.legend',
    description: 'Describe what to do with the input field',
    defaultMessage: 'Type a username or repo full name and hit \'Go\':'
  }
})

const DEFAULT_USER = 'mingyuchoo'

const parseFullName = (params) => {
  const { username, repo } = params
  if (!username)
    return DEFAULT_USER

  return username + (repo ? '/' + repo : '')
}

export default class Explore extends Component {

  constructor(props) {
    super(props)

    // State that depends on props is often an anti-pattern, but in our case
    // that's what we need to we can update the input both in response to route
    // change and in response to user typing.
    this.state = {
      usernameOrRepo: parseFullName(props.params)
    }

    this.handleKeyUp = this.handleKeyUp.bind(this)
    this.handleOnChange = this.handleOnChange.bind(this)
    this.handleGoClick = this.handleGoClick.bind(this)
    this.getInputValue = this.getInputValue.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!shallowEqual(this.props.params, nextProps.params))
      this.setState({
        usernameOrRepo: parseFullName(nextProps.params)
      })
  }

  handleKeyUp(event) {
    if (event.keyCode === 13)
      this.handleGoClick()
  }

  handleOnChange() {
    // Update the internal state because we are using a controlled input.
    // This way we can update it *both* in response to user input *and*
    // in response to navigation in `componentWillReceiveProps`.
    this.setState({
      usernameOrRepo: this.getInputValue()
    })
  }

  handleGoClick() {
    // check this site ...
    // https://github.com/reactjs/react-router/blob/master/upgrade-guides/
    // v2.0.0.md

    // this.context.history.pushState({}, `/stargazers/${this.getInputValue()}`)
    this.context.history.push(`/stargazers/${this.getInputValue()}`, {})
  }

  getInputValue() {
    return findDOMNode(this.refs.usernameOrRepo).value
  }

  render() {
    return (
      <div className="row">
        <form onSubmit={e => e.preventDefault()}>
          <label>
            <FormattedMessage {...messages.legend} />
          </label>
          <div className="medium-10 columns">
            <input
              type="text"
              ref="usernameOrRepo"
              onKeyUp={this.handleKeyUp}
              onChange={this.handleOnChange}
              value={this.state.usernameOrRepo}
              placeholder="username/repo"
            />
          </div>
          <div className="medium-2 columns">
            <button
              className="expanded button"
              type="submit"
              onClick={this.handleGoClick}
            >
              Go!
            </button>
          </div>
        </form>
      </div>
    )
  }
}

Explore.propTypes = {
  params: PropTypes.shape({
    repo: PropTypes.string,
    username: PropTypes.string
  })
}

Explore.contextTypes = {
  history: PropTypes.object.isRequired
}
