const createContext = require('./createContext')
const createServer = require('./createServer')

const config = require('./common/config')

try {
  const context = createContext()
  const server = createServer(context)

  server.listen(config.server.port, () => {
    console.log(`Application is listening on ${config.server.port} port`)
  })
} catch (error) {
  console.error(error, error.stack)
}
