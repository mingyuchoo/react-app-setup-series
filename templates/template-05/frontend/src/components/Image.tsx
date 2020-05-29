import React, { Component } from 'react';

export interface ImageProps {logo: string}
export interface ImageState {}
export default class Image extends Component<ImageProps, ImageState> {
  constructor(props: ImageProps) {
    super(props)
    this.state = ''
  }
  static defaultProps = {logo: null}
  state = this.props.logo
  render() {
    return (
      <img src={this.props.logo} className="Frontend" alt="logo" />
    )
  }
}
