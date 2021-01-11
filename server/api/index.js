const router = require('express').Router()
module.exports = router


router.get('/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

router.post('/world', (req, res) => {
  console.log(req.body);
  res.send(
    `I received your POST request. This is what you sent me: ${req.body.post}`,
  );
});

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
