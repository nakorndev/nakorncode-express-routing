const router = require('express-async-router').AsyncRouter()

const cb = (req, res) => {
  return res.send({ message: 'ok', params: req.params })
}

router.get('/', cb)
router.get('/users', cb)
router.get('/create-users', cb)
router.post('/ban-user/:id', cb)
router.post('/unban-user/:id', cb)

module.exports = router
