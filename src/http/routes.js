const routes = (server) => {
  const db = require('../services/mysql/')
  server.get('/categoria', async (req, res, next) => {
    try {
      res.send(
        await db.categories().all()
      )
      next()
    } catch (error) {
      res.send(error)
      next()
    }
  })

  server.post('/categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  server.put('/categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  server.del('/categoria', (req, res, next) => {
    const { name } = req.params
    res.send(name)
    next()
  })

  server.get('/', (req, res, next) => {
    res.send('Enjoy the silence!!!')
    next()
  })
}

module.exports = routes
