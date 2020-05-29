import { expect } from 'chai'
import http from 'http'
import request from 'request'
import querystring from 'querystring'
import mockserver from 'mockserver'

describe('Mock server', () => {
  before(() => {
    mockserver.headers = [
      'Access-Control-Allow-Origin: *',
      'Content-Type: application/json',
      'Content-Length: 378',
      'Server: Werkzeug/0.15.6 Python/2.7.15+',
      'Date: Fri, 27 Sep 2019 16:10:54 GMT'
    ]
    http.createServer(mockserver('test/mocks')).listen(3000)
  })

  it('should run next button exactly', async () => {
    let reqHeaders = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Correlation-Object': '{correlationId: 111}'
    }

    let reqData = {
      id: '',
      name: 'service title!',
      creationDate: '',
      creator: 'SYSTEM',
      lastModified: '',
      lastModifier: 'SYSTEM',
      version: 1,
      status: 'DRAFT',
      fields: [
        { type: 'string', label_ko: 'N/A', label_en: 'service title!', description_en: 'description of service', category: 'title.widget' }
      ]
    }
    let reqBody = querystring.stringify(reqData)
    let contentLength = reqBody.length
    request(
      { uri: 'http://localhost:3000/service-definitions', headers: reqHeaders, body: reqBody, method: 'POST' },
      (error, response, body) => {
        expect(response.body).to.contain('title.widget')
      }
    )
  })

  it('should run back button exactly', async () => {
    let reqHeaders = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Correlation-Object': '{correlationId: 111}'
    }

    let reqData = {
      creator: 'SYSTEM',
      name: 'service title!',
      lastModifier: 'SYSTEM',
      id: '98ee1275-5c17-49a9-84a6-b45f87dc90df',
      lastModified: '2019-09-27T16:13:58.565Z',
      creationDate: '2019-09-27T16:10:53.745Z',
      fields: [
        { type: 'string', label_ko: 'N/A', label_en: 'service title!', description_en: 'description of service', category: 'title.widget' },
        { type: 'checkbox', label_ko: 'N/A', label_en: 'N/A', data: { 'Role 2': true }, category: 'permissions.widget' }
      ],
      version: 2,
      status: 'DRAFT'
    }
    let reqBody = querystring.stringify(reqData)
    let contentLength = reqBody.length
    request(
      {
        uri: 'http://localhost:3000/service-definitions/98ee1275-5c17-49a9-84a6-b45f87dc90df',
        headers: reqHeaders,
        body: reqBody,
        method: 'PUT'
      },
      (error, response, body) => {
        expect(response.body).to.contain('title.widget')
      }
    )
  })
  it('should run save button exactly', async () => {
    let reqHeaders = {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      'Correlation-Object': '{correlationId: 111}'
    }

    let reqData = {
      creator: 'SYSTEM',
      name: 'service title!',
      lastModifier: 'SYSTEM',
      id: '98ee1275-5c17-49a9-84a6-b45f87dc90df',
      lastModified: '2019-09-27T16:17:55.787Z',
      creationDate: '2019-09-27T16:10:53.745Z',
      fields: [
        { type: 'string', label_ko: 'N/A', label_en: 'service title!', description_en: 'description of service', category: 'title.widget' },
        { type: 'checkbox', label_ko: 'N/A', label_en: 'N/A', data: { 'Role 2': true }, category: 'permissions.widget' },
        {
          type: 'slotGroup',
          label_ko: 'N/A',
          label_en: 'N/A',
          data: [
            {
              id: 0,
              times: { start: '07:00', end: '07:30', startTimeChanged: false, endTimeChanged: false },
              days: ['Tue'],
              resourceCount: 1,
              price: '$0.00',
              checked: false
            }
          ],
          category: 'reservation.widget'
        }
      ],
      version: 5,
      status: 'DRAFT'
    }
    let reqBody = querystring.stringify(reqData)
    let contentLength = reqBody.length
    request(
      {
        uri: 'http://localhost:3000/service-definitions/98ee1275-5c17-49a9-84a6-b45f87dc90df',
        headers: reqHeaders,
        body: reqBody,
        method: 'PUT'
      },
      (error, response, body) => {
        expect(response.body).to.contain('title.widget')
      }
    )
  })
})
