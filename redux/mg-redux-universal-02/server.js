import path from 'path'
import express from 'express'
import webpack from 'webpack'
import config from './webpack.config'

// GraphQL
import graphqlHTTP from 'express-graphql'
import schema from './api/schema/schema'

// socket.io
import { socketServer } from './socketio'

const app = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

// GraphQL
app.use('/graphql', graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: true
}))

// App
app.get('*', (req, res) => {
  console.log(req.url)
  res.sendFile(path.join(__dirname, './dist/index.html'))
})

const webServer = app.listen(process.env.PORT || 3000, process.env.IP || '0.0.0.0', (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('Listening at http://', process.env.IP || '0.0.0.0' , ':', process.env.PORT || 3000)
})

// run socketServer
socketServer(webServer)
