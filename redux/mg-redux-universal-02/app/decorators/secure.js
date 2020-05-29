import React, { Component, PropTypes } from 'react'
import { Forbidden } from '../components'

const secure = (scope) => {
  return DecoratedComponent =>
  class SecureDecorator extends Component {

    static contextTypes = {
      store: PropTypes.any
    }

    render() {
      const { store } = this.context
      const { application: { user } } = store.getState()

      if (user.permissions.some(s => s === scope))
        return <DecoratedComponent {...this.props} />
      else
        return <Forbidden />
    }
  }
}

export default secure
