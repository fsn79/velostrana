const db = require('../models');
const bcrypt = require('bcrypt');
const router = require('express').Router();

router
  .get('/', (req, res) => {
    res.render('index', {log: true})
  })

  .post('/', async (req, res) => {
    const { loginEmail, loginPassword } = req.body;

    const checkUser = await db.velouser.findOne({
      where: {
        email: loginEmail,
      }
    })
    const checkPass = await bcrypt.compare(loginPassword, checkUser.password);
    
    if (checkUser && checkPass) {
      //прикурили куку с сессией к вошедшему
      req.session.checkUser = checkUser
      res.status(201).json({ registration: true, message: `/auth/${checkUser.name}`, user: checkUser.name })
    } else {
      res.status(403).json({ registration: false, message: 'Error! Try again' })
    }
})

module.exports = router;
