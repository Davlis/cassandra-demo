const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints:['cassandra']
});

function get(query, callback) {
    query = `select key from ${query}`;

    client.execute(query, (err,result) => {
      if (err) {
        return callback(err);
      }

      console.log("I found something!")

      return callback(null,result);
    });
}

module.exports = {
  client,
  get
}
