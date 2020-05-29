import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'

export default class Pagination extends Component {

  handlePaginationClick(link) {
    const page = link.url
    this.props.onPagination({ page })
  }

  render() {
    const { pagination } = this.props
    if (!pagination) return null

    const iconMap = {
      first: 'pagination-previous',
      prev: 'pagination-previous',
      next: 'pagination-next',
      last: 'pagination-next'
    }

    return (
      <div className="row">
        <ul
          className="pagination text-center"
          role="navigation"
        >
          {[ 'first', 'prev', 'next', 'last' ].map((key, i) =>
            <li className={iconMap[key]} key={i}>
            {pagination[key] ?
              <span onClick={this.handlePaginationClick.bind(
                this, pagination[key])} />
              : <span className={classnames(iconMap[key], 'disabled')} />
            }
            </li>
          )}
        </ul>
      </div>
    )
  }
}

Pagination.propTypes = {
  onPagination: PropTypes.func,
  pagination: PropTypes.object
}
