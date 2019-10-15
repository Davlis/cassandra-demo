const config = {
  server: {
    host: '0.0.0.0',
    port: 8080
  },
  db: {
    contactPoints: 'cassandra',
    username: 'cassandra',
    password: 'cassandra',
    datacenter: 'datacenter1',
    keyspace: 'dawid'
  },
}

module.exports = config
