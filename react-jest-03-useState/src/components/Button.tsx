import React, { Component, useState, ReactElement } from 'react'

export class ButtonClass extends Component {
  state = { buttonText: 'ButtonClass' }

  handleClick = (): void => {
    this.setState(() => {
      return { buttonText: 'ButtonClass is clicked.' }
    })
  }
  render = (): ReactElement => {
    const { buttonText } = this.state
    return <button onClick={this.handleClick}>{buttonText}</button>
  }
}

export const ButtonFunction1: React.FC = (): ReactElement => {
  const [buttonText, setButtonText] = useState('ButtonFunction1')

  return (
    <button onClick={(): void => setButtonText('ButtonFunction1 is clicked.')}>
      {buttonText}
    </button>
  )
}

export const ButtonFunction2: React.FC = (): ReactElement => {
  const [buttonText, setButtonText] = useState('ButtonFunction2')

  const handleClick = (): void => {
    return setButtonText('ButtonFunction2 is clicked.')
  }

  return <button onClick={handleClick}>{buttonText}</button>
}
