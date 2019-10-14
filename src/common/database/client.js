const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['cassandra'],
  authProvider: new cassandra.auth.PlainTextAuthProvider('cassandra', 'cassandra'),
  localDataCenter: 'datacenter1', 
  keyspace: 'ks1'
});

function get(query) {
  return new Promise((resolve, reject) => {
    query = `select key from ${query}`;

    client.execute(query, (error, result) => {
      if (error) {
        reject(error)
        return
      }
  
      console.log("I found something!")
  
      resolve(result)
    });
  })
}

module.exports = {
  client,
  get
}
