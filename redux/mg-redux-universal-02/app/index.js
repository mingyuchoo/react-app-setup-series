import '../assets/stylesheets/index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Root, { store } from './Root'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import de from 'react-intl/locale-data/de'
import it from 'react-intl/locale-data/it'
import ko from 'react-intl/locale-data/ko'

addLocaleData(en)
addLocaleData(de)
addLocaleData(it)
addLocaleData(ko)

const start = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Root />
    </Provider>
  , document.getElementById('app'))
}

// All modern browsers, except `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl)
  require.ensure(['intl'], require => {
    require('intl').default
    start()
  }, 'IntlBundle')
else start()
