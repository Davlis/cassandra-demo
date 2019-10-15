const createDbClient = require('./common/database/createDbClient')
const config = require('./common/config')

const {
  username,
  password,
  contactPoints,
  datacenter,
  keyspace
} = config

function createContext() {
  const dbClient = createDbClient({
    username: config.db.username,
    password: config.db.password,
    contactPoints: config.db.contactPoints,
    datacenter: config.db.datacenter,
    keyspace: config.db.keyspace
  })
  
  const context = {
    dbClient
  }

  return context
}

module.exports = createContext
