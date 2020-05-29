import React, { Component, PropTypes } from 'react'
//import classnames from 'classnames'
import TopBar from './TopBar'
import Footer from './Footer'
import DisplayError from './DisplayError'

/**
 * <Application>{...}</Application>
 */
export default class Application extends Component {

  constructor(props, context) {
    super(props, context)
  }

  render() {
    return (
      <div>
        <TopBar />
        <DisplayError />
        {/* this will render the child routes */}
        {this.props.children}
        <Footer />
      </div>
    )
  }
}

Application.propTypes = {
  children: PropTypes.any
}
