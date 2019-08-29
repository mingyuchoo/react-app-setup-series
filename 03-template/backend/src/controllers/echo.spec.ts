import { expect } from 'chai'
import * as request from 'supertest'
import app from '../app'

describe('echo.spec', () => {
  const req = request(app)

  it('GET /api/echo', async () => {
    const msg = 'Echo Hello, World!'
    const res = await req.get('/api/echo').expect(200)
    expect(res.text).to.include(msg)
  })
})
