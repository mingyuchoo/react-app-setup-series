import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { CounterContainer } from '../common/containers'
import configureStore from '../common/configureStore'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)
const rootElement = document.getElementById('app')

render(
  <Provider store={store}>
    <CounterContainer />
  </Provider>,
  rootElement
)
