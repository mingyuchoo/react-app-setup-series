import { expect } from 'chai'
import * as request from 'supertest'
import app from './app'

describe('app.spec', () => {
  const req = request(app)
  it('GET /', async () => {
    const res = await req.get('/').expect(404)
  })
})
