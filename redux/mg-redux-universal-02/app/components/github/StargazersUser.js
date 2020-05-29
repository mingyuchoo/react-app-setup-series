import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class StargazersUser extends Component {

  render() {
    const { user } = this.props

    return (
      <div className="l-box">
        <div>
          <Link to={`/stargazers/${user.login}`} title={user.login}>
            <img
              src={user.avatar_url}
              width="72"
              height="72"
              style={{ borderRadius: '100px' }}
            />
          </Link>
        </div>
        <div>
          <Link to={`/stargazers/${user.login}`}
            style={{ textDecoration: 'none', color: '#888' }}>
            <div className="ellipsis">
              <i className="fa fa-angle-double-right" />
              {' ' + user.login}
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

StargazersUser.propTypes = {
  user: PropTypes.object.isRequired
}
