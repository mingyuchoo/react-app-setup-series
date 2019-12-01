import React, { useState, ReactElement, useEffect } from 'react'

interface Movie {
  id: number
  title: string
}

// https://www.valentinog.com/blog/hooks/
export const DataLoader: React.FC = (): ReactElement => {
  const [data, setData] = useState([])

  const getDataFromServer = async (): Promise<void> => {
    // response - [{"id": 1, "title": "Load of Rings" },{"id": 2, "title": "Mars" }]
    const response = await fetch('http://localhost:3001/links')
    const data = await response.json()
    setData(data)
  }

  useEffect(() => {
    getDataFromServer()
  }, [])

  return (
    <ul>
      {data.map((item: Movie) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  )
}
