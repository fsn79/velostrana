const router = require('express').Router()

router.get('/', (req, res) => {
  res.clearCookie('mira')
  res.redirect('/')
})

module.exports = router
