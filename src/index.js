const express = require('express')
const database = require('./common/database/client')

const PORT = 8080

const application = express()

application.get('/', (_request, response, next) => {
  console.log(`Request: processing`)

  const assertValue = 'system.local'

  database.get(assertValue, (error,result) => {
    if (error) {
      return next(error);
    }

    return response.send({ result: process.pid, db :result })
  });
})

application.listen(PORT, () => {
  console.log(`Application is listening on ${PORT} port`)
})