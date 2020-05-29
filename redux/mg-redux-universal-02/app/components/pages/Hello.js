import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getGraph } from '../../actions/graphql.js'

/**
 * <Hello graphql={...} action={...} />
 */
class Hello extends Component {

  componentDidMount() {
    this.props.action('{ people { id, firstName, lastName, email } }')
  }

  render() {
    let fetchInProgress = String(this.props.graphql.fetching)
    let people = []
    let queryText

    if (this.props.graphql.data.people)
      people = this.props.graphql.data.people

    return (
      <div>
        <div className="callout large">
          <div className="row column text-center">
            <h1>Hello</h1>
            <p>This is GraphQL example page.</p>
          </div>
        </div>
        <div className="row">
          <label>Query or Mutation
            <textarea
              ref={node => {queryText = node}}
              placeholder="Input query here."
            />
          </label>
          <button
            className="expanded button"
            onClick={() => {this.props.action(queryText.value)}}
          >
            Click!
          </button>
          <p>Fetch in progress: {fetchInProgress}</p>
          <table className="hover">
            <tbody>
            { people.map((person) => {
              return (
                <tr key={ person.id }>
                  <td>{ person.id }</td>
                  <td>{ person.firstName } { person.firstName }</td>
                  <td>{ person.email }</td>
                </tr>
              )
            })}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

Hello.propTypes = {
  graphql: PropTypes.object,
  action: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return { graphql: state.graphql }
}

const mapDispatchToProps = (dispatch) => {
  return { action: bindActionCreators(getGraph, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Hello)
