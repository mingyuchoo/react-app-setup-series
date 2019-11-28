import React, { Component, useState, useEffect } from 'react'

export class DataLoaderComponent extends Component {
  state = { data: [] }

  componentDidMount() {
    fetch('http://localhost:3001/links/')
      .then(response => response.json())
      .then(data =>
        this.setState(() => {
          return { data }
        })
      )
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li key={el.id}>{el.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export const DataLoaderFunction: React.FC = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/links/')
      .then(response => response.json())
      .then(data => setData(data))
  })

  return (
    <div>
      <ul>
        {data.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </div>
  )
}
