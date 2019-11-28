import React, { Component, useState } from 'react'

export class ButtonClass extends Component {
  state = { buttonText: 'ButtonClass' }
  handleClick = () => {
    this.setState(() => {
      return { buttonText: 'ButtonClass is clicked.' }
    })
  }
  render = () => {
    const { buttonText } = this.state
    return <button onClick={this.handleClick}>{buttonText}</button>
  }
}

export const ButtonFunction1: React.FC = () => {
  const [buttonText, setButtonText] = useState('ButtonFunction1')
  return (
    <button onClick={() => setButtonText('ButtonFunction1 is clicked.')}>
      {buttonText}
    </button>
  )
}

export const ButtonFunction2: React.FC = () => {
  const [buttonText, setButtonText] = useState('ButtonFunction2')
  const handleClick = () => {
    return setButtonText('ButtonFunction2 is clicked.')
  }
  return <button onClick={handleClick}>{buttonText}</button>
}
