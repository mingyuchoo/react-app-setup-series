import React, { Component } from 'react'

export interface ParagraphProps {}
export interface ParagraphState {echo: string}
export default class Paragraph extends Component<ParagraphProps, ParagraphState> {
  constructor(props: ParagraphProps) {
    super(props)
  }
  state = {echo: ''}
  componentDidMount() {
    fetch('http://localhost/api/echo')
    .then(response => response.json())
    .then(data => this.setState({echo: data.echo}))
  }
  render() {
    return (
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
        {" "}
        {this.state.echo}
      </p>
    )
  }
}
