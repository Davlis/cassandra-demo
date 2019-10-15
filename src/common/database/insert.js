function insert(client, tableName, valueObject) {
  return new Promise((resolve, reject) => {
    const rawFields = Object.keys(valueObject)
    const rawValues = Object.values(valueObject)

    const fields = `${rawFields.join(', ')}`
    const values = rawValues.reduce((accumulator, current) => {
      if (accumulator === '') {
        if (typeof current === "string") {
          return `'${current}'`
        } else {
          return `${current}`
        }
      }
      if (typeof current === "string") {
        return `${accumulator}, '${current}'`
      } else {
        return `${accumulator}, ${current}`
      }
    }, '')

    const query = `INSERT INTO ${tableName} (${fields}) VALUES(${values})`

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

module.exports = insert
