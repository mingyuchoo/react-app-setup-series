import React, {
  useState,
  useEffect,
  ReactElement,
  MouseEventHandler,
} from 'react'

interface ButtonProps {
  handleClick: MouseEventHandler
  text: string
}
export const Button: React.FC<ButtonProps> = (props): ReactElement => {
  return <button onClick={props.handleClick}>{props.text}</button>
}

interface CounterProps {
  initial: number
}

export const Counter: React.FC<CounterProps> = (props): ReactElement => {
  const [count, setCount] = useState(props.initial)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button handleClick={(): void => setCount(count - 1)} text={'Minus'} />
      <Button
        handleClick={(): void => setCount(props.initial)}
        text={'Reset'}
      />
      <Button handleClick={(): void => setCount(count + 1)} text={'Plus'} />
    </div>
  )
}
