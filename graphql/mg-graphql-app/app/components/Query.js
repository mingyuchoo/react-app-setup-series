import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { getGraph } from '../actions/actions.js'

class Query extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(
      getGraph('{goldberg(id: 2) {id, character, actor}}')
    )
  }

  render() {
    let dispatch = this.props.dispatch
    let fetchInProgress = String(this.props.store.get('fetching'))
    let goldberg = this.props.store.get('data').toObject()
    let queryText

    return (
      <div>
        <p>Fetch in progress: {fetchInProgress}</p>
        <h3>{ goldberg.character }</h3>
        <p>{ goldberg.actor }</p>
        <p>{ goldberg.role }</p>
        <p>{ goldberg.traits }</p>
        <input ref={node => {queryText = node}} />
        <button onClick={() => {
          dispatch(getGraph(queryText.value))}
        }>
          query
        </button>
      </div>
    )
  }
}

Query.propTypes = {
  dispatch: PropTypes.any,
  store: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return { store: state }
}

export const QueryContainer = connect(mapStateToProps)(Query)
