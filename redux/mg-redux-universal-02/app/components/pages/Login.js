import React, { Component, PropTypes } from 'react'
import * as actions from '../../actions/application'

/**
 * <Login location={...} />
 */
export default class Login extends Component {

  constructor(props) {
    super(props)
    this.state = { email: null, password: null }
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { history, store } = this.context
    const { location } = this.props

    let nextPath = '/account'
    if (location.state && location.state.nextPathname)
      nextPath = location.state.nextPathname

    store.dispatch(actions.login(this.state, () => {
      // redirect to a secure page

      // check this site ...
      // https://github.com/reactjs/react-router/blob/master/upgrade-guides/
      // v2.0.0.md

      // history.pushState({}, nextPath)
      history.push(nextPath, {})
    }))
  }

  render() {
    return (
      <div>
        <div className="row medium-4 medium-centered column">
          <h1>Login</h1>
          <form onSubmit={::this.handleSubmit}
            onChange={::this.handleInputChange} >
            <fieldset>
                <label>Email
                  <input type="email" name="email" defaultValue="foo@bar.com" />
                </label>
                <label>Password
                  <input
                    type="password"
                    name="password"
                    defaultValue="secret"
                  />
                </label>
                <button className="expanded button" type="submit">Login</button>
            </fieldset>
          </form>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
  location: PropTypes.object
}

Login.contextTypes = {
  store: PropTypes.any,
  history: PropTypes.object.isRequired
}
