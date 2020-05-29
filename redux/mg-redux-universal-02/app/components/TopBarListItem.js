import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'

/**
 * <TopBarListItem
 *   icon={...}
 *   isExternal={...}
 *   link={...}
 *   text={...}
 * />
 */
export default class TopBarListItem extends Component {

  render() {
    return (
      <li>{this.renderLink()}</li>
    )
  }

  renderLink() {
    if (this.props.isExternal)
      return (
        <a href={this.props.link} target="_blank">
          <i className={this.props.icon} /> {this.props.text}
        </a>
      )
    else
      return (
        <Link to={this.props.link}>
          <i className={this.props.icon} /> {this.props.text}
        </Link>
      )
  }
}

TopBarListItem.propTypes = {
  icon: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

TopBarListItem.defaultProps = {
  isExternal: false
}
