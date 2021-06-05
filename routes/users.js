// const router = require('express').Router()
const router = require('express-async-router').AsyncRouter()

const cb = async (req, res) => {
  throw new Error('hello')
  return res.send({ message: 'ok', params: req.params })
}

router.get('/', cb)
router.get('/:id', cb)
router.post('/', cb)
router.put('/:id', cb)
router.delete('/:id', cb)

module.exports = router
