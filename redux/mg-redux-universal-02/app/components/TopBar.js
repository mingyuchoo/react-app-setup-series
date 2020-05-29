import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as applicationActions from '../actions/application'
import TopBarListItem from './TopBarListItem'

const barItems = [
  { text: 'Stargazers', link: '/stargazers/mingyuchoo', icon: 'fa fa-star' },
  { text: 'Hello', link: '/hello', icon: 'fa fa-child' },
  { text: 'Chat', link: '/chat', icon: 'fa fa-comment-o' },
  { text: 'About', link: '/about', icon: 'fa fa-dot-circle-o' },
  { text: 'Account', link: '/account', icon: 'fa fa-user' },
]

/**
 * <TopBar application={...} switchLocale={...} />
 */
class TopBar extends Component {

  constructor(props, context) {
    super(props, context)
    this.handleLanguageSwitch = this.handleLanguageSwitch.bind(this)
  }

  handleLanguageSwitch(event) {
    this.props.switchLocale(event.target.value)
  }

  render() {
    const { application: { locale } } = this.props
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><Link to="/">Home</Link></li>
            {
              barItems.map((item, i) =>
                <TopBarListItem key={i} {...item} />)
            }
          </ul>
        </div>
        <div className="top-bar-right">
          <select
            ref="langSwitcher"
            value={locale}
            onChange={this.handleLanguageSwitch}
          >
            <option value="en">English</option>
            <option value="ko">한국어</option>
          </select>
        </div>
      </div>
    )
  }
}

TopBar.propTypes = {
  application: PropTypes.object.isRequired,
  switchLocale: PropTypes.func.isRequired
}

// const mapStateToProps = ({ application }) => {
//   return { application }
// }

const mapStateToProps = (state) => {
  return { application: state.application }
}

export default connect(
  mapStateToProps,
  applicationActions
)(TopBar)
