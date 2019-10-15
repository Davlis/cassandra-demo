function all(client, table) {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM ${table}`

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

module.exports = all
