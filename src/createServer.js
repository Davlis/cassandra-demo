const express = require('express')

function createServer(context) {
  const application = express()

  const { dbClient } = context

  application.use(express.json())

  application.get('/', async (_request, response, next) => {
    console.log(`GET / : processing started`)
  
    try {
      const result = await dbClient.all('user')
      response.send({ result: process.pid, db: result })
    } catch (error) {
      next(error)
    }

    console.log(`GET / : processing finished`)
  })

  application.post('/', async (request, response, next) => {
    console.log(`POST / : processing started`)

    const payload = request.body

    try {
      const result = await dbClient.insert('user', payload)
      response.send({ result: process.pid, db: result })
    } catch (error) {
      next(error)
    }

    console.log(`POST / : processing finished`)
  })

  return application
}

module.exports = createServer
