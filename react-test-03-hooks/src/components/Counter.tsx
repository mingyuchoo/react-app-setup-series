import React, { useState, useEffect, ReactElement } from 'react'

import { Button } from './Button'

/**
 * Counter
 */
interface CounterProps {
  initial: number
}

// function Counter<CounterProps> (props:CounterProps): RectElement {
export const Counter: React.FC<CounterProps> = (
  props: CounterProps
): ReactElement => {
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
