import React, { Component, PropTypes } from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import { queryReducer } from "./app/reducers/reducers.js"
import thunkMiddleware from "redux-thunk"
import logger from 'redux-logger'

const createStoreWithMiddleware =
applyMiddleware(thunkMiddleware, logger())(createStore)

// Component Container
import { QueryContainer } from "./app/components/Query.js";

class Main extends Component {
  render() {
    return (
      <div>
        <QueryContainer />
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(queryReducer)}>
    <Main />
  </Provider>,
  document.getElementById("example")
)
