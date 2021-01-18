const router = require('express').Router()
const {Image} = require('../db/models')
module.exports = router


router.use('/upload', require('./upload'))

router.get('/', async (req, res, next) => {
  try {
    const images = await Image.findAll()
    res.send(images)
  } catch (error) {
    next(error)
  }
});


router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
