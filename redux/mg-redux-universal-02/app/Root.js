/* global __DEVTOOLS__ */
import '../assets/stylesheets/index.css'

import React, { PropTypes } from 'react'
import { Redirect, Route } from 'react-router'
import { ReduxRouter } from 'redux-router'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import configureStore from './utils/configureStore'
import * as storage from './persistence/storage'
import * as components from './components'
import * as constants from './constants'
import * as i18n from './i18n'

const {
  About,
  Account,
  AccountHome,
  Application,
  Chat,
  GithubStargazers,
  GithubRepo,
  GithubUser,
  Hello,
  Home,
  Login,
  SuperSecretArea
} = components


const initialState = {
  application: {
    token: storage.get('token'),
    locale: storage.get('locale') || 'en',
    user: { permissions: [/*'manage_account'*/] }
  }
}
export const store = configureStore(initialState)

/* Warning: [react-router]
 * `replaceState(state, pathname, query) is deprecated;
 * use `replace(location)` with a location descriptor instead.
 * http://tiny.cc/router-isActivedeprecated
 */
const requireAuth = (nextState, replace) => {
  const state = store.getState()
  const isLoggedIn = Boolean(state.application.token)
  if (!isLoggedIn)
    replace({
      pathname: '/login',
      query: { nextPathname: nextState.location.pathname }
    })
}

const logout = (nextState, replace) => {
  store.dispatch({ type: constants.LOG_OUT })
  replace({
    pathname: '/login',
    query: {}
  })
}

const renderRoutes = () => {
  return (
    <ReduxRouter>
      <Route component={Application}>
        <Route path="/" component={Home} />
        <Redirect from="/account" to="/account/profile" />
        <Route path="stargazers" component={GithubStargazers}>
          <Route path=':username' component={GithubUser} />
          <Route path=':username/:repo' component={GithubRepo} />
        </Route>
        <Route path="about" component={About} />
        <Route path="account" component={Account} onEnter={requireAuth}>
          <Route path="profile" component={AccountHome} />
          <Route path="secret-area" component={SuperSecretArea} />
        </Route>
        <Route path="hello" component={Hello} />
        <Route path="chat" component={Chat} />
        <Route path="login" component={Login} />
        <Route path="logout" onEnter={logout} />
      </Route>
    </ReduxRouter>
  )
}

const getRootChildren = (props) => {
  const intlData = {
    locale: props.application.locale,
    messages: i18n[props.application.locale]
  }
  const rootChildren = [
    <IntlProvider key="intl" {...intlData}>
      {renderRoutes()}
    </IntlProvider>
  ]
  if (__DEVTOOLS__) {
    const DevTools = require('./components/DevTools').default
    rootChildren.push(<DevTools key="devtools" />)
  }
  return rootChildren
}


class Root extends React.Component {

  render() {
    return (
      <div>{getRootChildren(this.props)}</div>
    )
  }
}

Root.propTypes = {
  application: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return { application: state.application }
}

export default connect(mapStateToProps)(Root)
