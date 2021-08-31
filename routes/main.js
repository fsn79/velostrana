// main page
const router = require('express').Router();

router.get('/', (req, res) => {
//проверет, есть ли кука с сессией (человек)
  if (typeof req.session['checkUser'] !== "undefined") {
    res.redirect(`/auth/${req.session.checkUser.name}`)
  } else {
    res.render('partials/home');
  }

});

router.get('/auth/:name', (req, res) => {
  const {name} = req.params
  // res.redirect('/')
  res.render('index', {main: true, name});
});
module.exports = router;
