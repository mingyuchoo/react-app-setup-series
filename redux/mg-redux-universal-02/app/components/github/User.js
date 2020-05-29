import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { fetchOnUpdate } from '../../decorators'
import StargazersRepo from './StargazersRepo'
import Pagination from './Pagination'

class User extends Component {

  render() {
    const { github: { user, stargazers } } = this.props
    const { pagination } = stargazers

    return (
      <div>
        {this.renderUser(user)}
        <div className="row">
          <Pagination
            pagination={pagination}
            onPagination={this.props.actions.fetchUserStargazers}
          />
        </div>
        <div className="row small-up-3 medium-up-4 large-up-5">
          {stargazers.user.map(repo =>
            <div className="column" key={repo.full_name}>
              <StargazersRepo repo={repo} />
            </div>
          )}
        </div>
      </div>
    )
  }

  renderUser(user) {
    return (
      <div className="row">
        <div className="medium-3 medium-centered columns">
          <Link to={`/stargazers/${user.login}`}>
            <img
              src={user.avatar_url}
              width='144'
              height='144'
              style={{ borderRadius: '200px' }}
            />
            <p>
              {user.login}
              {' '}
              <small>{user.name && <span>({user.name})</span>}</small>
            </p>
          </Link>
        </div>
      </div>
    )
  }
}

User.propTypes = {
  actions: PropTypes.object,
  github: PropTypes.object
}

export default fetchOnUpdate(['username'], (params, actions) => {
  const { username } = params
  actions.fetchUser({ username })
  actions.fetchUserStargazers({ username })
})(User)
