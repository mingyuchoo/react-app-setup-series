import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

export default class StargazersRepo extends Component {

  render() {
    const { repo } = this.props
    const { owner } = repo

    return (
      <div className="row">
        <div className="row">
          <Link to={`/stargazers/${owner.login}`} title={owner.login}>
            <img
              src={owner.avatar_url}
              width="72"
              height="72"
              style={{ borderRadius: '100px' }}
            />
          </Link>
          <div className="row">
            <p><i className="fa fa-star" /> {repo.stargazers_count}</p>
            {/* FIXME: it seems that the correct field `subscribers_count`
                is missing from the API response */}
            {/*<p><i className="fa fa-eye"></i> {repo.subscribers_count}</p>*/}
          </div>
        </div>
        <div>
          <Link to={`/stargazers/${owner.login}/${repo.name}`}
            title={repo.description}
            style={{ textDecoration: 'none', color: '#888' }}>
            <div className="row">
              <i className="fa fa-angle-double-right" />
              {' ' + repo.name}
            </div>
          </Link>
        </div>
      </div>
    )
  }
}

StargazersRepo.propTypes = {
  repo: PropTypes.object.isRequired
}
