import React, { ReactElement, MouseEventHandler } from 'react'

import './Button.css'

/**
 * Button
 */
interface ButtonProps {
  handleClick: MouseEventHandler
  text: string
}
// EXAMPLE:
// function loggingIdentity<T>(arg: T): T {
//   console.log(arg.length);  // Error: T doesn't have .length
//   return arg;
// }

// function Button<ButtonProps> (props:ButtonProps): ReactElement {
export const Button: React.FC<ButtonProps> = (
  props: ButtonProps
): ReactElement => {
  return (
    <button className="Button" onClick={props.handleClick}>
      {props.text}
    </button>
  )
}
