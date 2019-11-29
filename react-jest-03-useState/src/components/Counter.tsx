import React, { useState, useEffect, ReactElement } from 'react'

export const Counter = (props: { initialCount: number }): ReactElement => {
  const [count, setCount] = useState(props.initialCount)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(): void => setCount(props.initialCount)}>Reset</button>
      <button onClick={(): void => setCount(count - 1)}>Minus</button>
      <button onClick={(): void => setCount(count + 1)}>Plus</button>
    </div>
  )
}
