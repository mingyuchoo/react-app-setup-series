import { expect } from 'chai'

import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

describe('Axios MockAdapter on the default instance', () => {
  let mock: MockAdapter
  before(() => {
    mock = new MockAdapter(axios, { delayResponse: 2000 })
  })

  it('should reply to /users', () => {
    mock.onGet('/users').reply(200, {
      //mock.onAny().reply(200, {
      users: [{ id: 1, name: 'John Smith' }]
    })
    axios.get('/users').then(response => {
      console.log(response.data)
      // expect(response.data['name']).to.be.contain('John Smith')
    })
  })

  it('should reply to /users when param "searchText" is "John"', () => {
    mock.onGet('/users', { params: { searchText: 'John' } }).reply(200, {
      // mock.onAny().reply(200, {

      users: [{ id: 1, name: 'John Smith' }]
    })
    axios.get('/users', { params: { searchText: 'John' } }).then(response => {
      console.log(response.data)
    })
  })
})
