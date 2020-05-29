import React, { Component } from 'react'

type CardColors = "red" | "blue"

export interface ColorCardProps {color: CardColors}
export interface ColorCardState {color: CardColors}
export default class ColorCard extends Component<ColorCardProps, ColorCardState> {
  static defaultProps = {
    color: "red"
  }
  state = {
    color: this.props.color
  }
  flipColor = () => {
    this.setState((prevState, props) => {
      return {color: prevState.color === "red" ? "blue" : "red"}
    })
  }
  render() {
    return (
      <div>
        {this.props.color}
      </div>
    )
  }
}
