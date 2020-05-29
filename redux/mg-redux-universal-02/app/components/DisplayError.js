import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'

/**
 * <DisplayError hideError={...} error={...} />
 */
class DisplayError extends Component {

  render() {
    const { props: { hideError, error } } = this

    if (!error)
      return null

    return (
      <div className="error-message">
        <div>
          <button className="button" type="button" onClick={hideError}>
            <i className="fa fa-times-circle" />
          </button>
          <p>{error.message}</p>
          <pre>
            <code>{JSON.stringify(error.body, null, 2)}</code>
          </pre>
        </div>
      </div>
    )
  }
}

DisplayError.propTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.object
}

// const mapStateToProps = ({ application }) => {
//   return { error: application.error }
// }

const mapStateToProps = (state) => {
  return { error: state.application.error }
}

export default connect(
  mapStateToProps,
  applicationActions
)(DisplayError)
