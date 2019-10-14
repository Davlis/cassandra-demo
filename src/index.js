const express = require('express')
const dbClient = require('./common/database/client')

const PORT = 8080

const application = express()

application.get('/', async (_request, response, next) => {
  console.log(`Request: processing`)

  const assertValue = 'system.local'

  try {
    const result = await dbClient.get(assertValue)
    response.send({ result: process.pid, db: result })
  } catch (error) {
    next(error)
  }
})

application.listen(PORT, () => {
  console.log(`Application is listening on ${PORT} port`)
})