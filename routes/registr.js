const router = require('express').Router();
const db = require('../models');
const bcrypt = require('bcrypt');
router
  .get('/', (req, res) => {
    res.render('index', { reg: true })
  })

  .post('/', async (req, res) => {
    const { name, email, password } = req.body;

    const checkUser =  await db.velouser.findOne({
      where: {
        email: email
      }
    });

    if(checkUser) {
      res.status(403).json({ registration: false, message: 'This email is already in use' })
    } else {
      try {
        const hashPass = await bcrypt.hash(password, 10);

        const user = await db.velouser.create({
          name: name,
          email: email,
          password: hashPass
        });

        // формирование сессии, user добавляется в неё как объект
        req.session.user = user;
        res.status(201).json({ registration: true, message: `/auth/${user.name}` })
      } catch (error) {
          next(error);
      }
    }
  });


module.exports = router;
