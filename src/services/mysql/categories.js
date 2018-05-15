const categories = deps => {
  return {
    all: () => {
      return new Promise((resolve, reject) => {
        const { connection } = deps
        connection.query('select * from categories', (error, results, fields) => {
          if (error) {
            reject(error)
          }
          resolve({ categories: results })
        })
      })
    },
    save: (name) => {},
    update: (id, name) => {},
    del: (id) => {}
  }
}

module.exports = categories
