function query(client, query) {
  return new Promise((resolve, reject) => {
    console.log('Cassandra query : ', query)

    client.execute(query, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result)
    })
  })
}

module.exports = query
