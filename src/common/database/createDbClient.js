const cassandra = require('cassandra-driver');

const _query = require('./query')
const _all = require('./all')
const _insert = require('./insert')

function createDbClient(config) {
  const {
      username,
      password,
      contactPoints,
      datacenter,
      keyspace
    } = config

  const client = new cassandra.Client({
    contactPoints: [contactPoints],
    authProvider: new cassandra.auth.PlainTextAuthProvider(username, password),
    localDataCenter: datacenter,
    keyspace: keyspace
  });

  return {
    query: (...arguments) => _query(client, ...arguments),
    all: (...arguments) => _all(client, ...arguments),
    insert: (...arguments) => _insert(client, ...arguments)
  }
}

module.exports = createDbClient
