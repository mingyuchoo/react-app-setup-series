import React, { Component, PropTypes } from 'react'

/**
 * <Account>{...}</Account>
 */
export default class Account extends Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

Account.propTypes = {
  children: PropTypes.any
}
