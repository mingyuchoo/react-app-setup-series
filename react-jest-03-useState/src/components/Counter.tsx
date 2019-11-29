import React, { useState, useEffect, ReactElement } from 'react'

interface Count {
  initial: number
}

export const Counter: React.FC<Count> = (props: Count): ReactElement => {
  const [count, setCount] = useState(props.initial)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={(): void => setCount(props.initial)}>Reset</button>
      <button onClick={(): void => setCount(count - 1)}>Minus</button>
      <button onClick={(): void => setCount(count + 1)}>Plus</button>
    </div>
  )
}
