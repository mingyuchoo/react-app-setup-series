import React, { Component } from 'react'
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  builtWith: {
    id: 'footer.builtWith',
    description: 'Mention how the site is built with',
    defaultMessage: 'This site is built with ❤️ using {link}'
  },
  legal: {
    id: 'footer.legal',
    description: 'Legal',
    defaultMessage: 'Legal'
  },
  partner: {
    id: 'footer.partner',
    description: 'Partner',
    defaultMessage: 'Partner'
  },
  explore: {
    id: 'footer.explore',
    description: 'Explore',
    defaultMessage: 'Explore'
  },
})

/**
 * <Footer />
 */
export default class Footer extends Component {
  render() {
    const link = (
      <a href="http://foundation.zurb.com/" target="_blank">Foundation</a>
    )
    return (
      <footer className="footer">
        <div className="callout large secondary">
          <div className="row expanded">
            <div className="medium-6 columns">
              <ul className="menu">
                <li>
                  <a href="#">
                    <FormattedMessage {...messages.legal} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage {...messages.partner} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FormattedMessage {...messages.explore} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="medium-6 columns">
              <ul className="menu align-right">
                <li className="menu-text">
                  <FormattedMessage {...messages.builtWith} values={{ link }} />
                  &copy; 2015
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
