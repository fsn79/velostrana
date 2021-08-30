// main page
const router = require('express').Router();

router.get('/', (req, res) => {
  const main = true;
  const name = req.body;
  res.render('index', {main: true});
});

router.get('/auth/:name', (req, res) => {
  const {name} = req.params
  // res.redirect('/')
  res.render('index', {main: true, name});
});
module.exports = router;
