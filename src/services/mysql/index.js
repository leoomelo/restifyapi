const mysql = require('mysql')
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'restful'
})

const categoryModule = require('./categories')({ connection })

module.exports = {
  categories: () => categoryModule
}
