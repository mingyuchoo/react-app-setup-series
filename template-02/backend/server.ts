import app from './src/app'

// Normalize a port into a number, string, or false.
const normalizePort = (val: any) => {
  let port = parseInt(val, 10)
  if (isNaN(port)) return val
  if (port >= 0) return port
  return false
}

// server setting
const port = normalizePort(process.env.PORT || '3000')
const devPort = normalizePort(process.env.PORT || '3001')

// listen
const server = app.listen(port, () => {
  console.log(`This application listening on port ${port}.`)
})

export default server
