import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { defineMessages, FormattedMessage } from 'react-intl'
import Explore from '../github/Explore'
import * as githubActions from '../../actions/github'

const messages = defineMessages({
  subtitle: {
    id: 'stargazers.subtitle',
    description: 'Subtitle of the page',
    defaultMessage: 'See the stargazers for your GitHub account and repos.'
  }
})

/**
 * <GithubStargazers actions={...}>
 * {...}
 * </GithubStargazers>
 */
class GithubStargazers extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <h1>Stargazers</h1>
          <FormattedMessage {...messages.subtitle}>
            { text => <h2>{text}</h2> }
          </FormattedMessage>
        </div>
        <Explore { ...this.props } />
        {/* this will render the child routes */}
        {
          this.props.children &&
          React.cloneElement(this.props.children, { ...this.props })
        }
      </div>
    )
  }
}

GithubStargazers.propTypes = {
  children: PropTypes.any,
  actions: PropTypes.object
}

const mapStateToProps = (state) => {
  return { github: state.github }
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(githubActions, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GithubStargazers)
