import React, { Component } from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'
import { secure } from '../../decorators'

const messages = defineMessages({
  info: {
    id: 'superSecretArea.info',
    description: 'Intro message describing the page',
    defaultMessage: 'This is a restricted area.'
  }
})

/**
 * <SuperSecretArea />
 */
class SuperSecretArea extends Component {

  render() {
    return (
      <div>
        <div className="row">
          <h1>SuperSecretArea</h1>
        </div>
        <div className="row">
          <p>
            <FormattedMessage {...messages.info} />
          </p>
        </div>
      </div>
    )
  }
}

export default secure('manage_account')(SuperSecretArea)
