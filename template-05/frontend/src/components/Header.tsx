import React, { Component } from 'react'

import Image from './Image'
import Paragraph from './Paragraph'
import Link from './Link'

export interface HeaderProps {logo: string}
export interface HeaderState {}
export default class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props)
    this.state = ''
  }
  static defaultProps = {logo: null}
  state = this.props.logo
  render() {
    return (
      <header className="App-header">
        <Image logo={this.props.logo} />
        <Paragraph />
        <Link />
      </header>
    )
  }
}
