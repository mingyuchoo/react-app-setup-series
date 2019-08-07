import * as express from 'express'
import * as path from 'path'
import * as bodyParser from 'body-parser'
import 'dotenv/config'

import routes from './routes'

const app = express()

app.use(express.static(path.join(__dirname, '../../public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', routes)

// serve index page from frontend
app.get('*', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'))
})

interface Err extends Error {
  status: number
  data?: any
}

// catch 404 and forward to error handler
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
  let err = new Error('Not Found') as Err
  err.status = 404
  next(err)
})

// error handle
app.use((err: Err, req: express.Request, res: express.Response, next: express.NextFunction) => {
  // render the error page
  res.status(err.status || 500)
  res.json({
    message: err.message,
    data: err.data
  })
})

export default app
