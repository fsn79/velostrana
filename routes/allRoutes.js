const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  res.render('allRoutes');
})

module.exports = router;
