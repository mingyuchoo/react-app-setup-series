import React, { Component } from 'react'

export interface LinkProps {}
export interface LinkState {}
export default class Link extends Component<LinkProps, LinkState> {
  constructor(props: LinkProps) {
    super(props)
  }
  render() {
    return (
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer">
        Learn React
      </a>
    )
  }
}
