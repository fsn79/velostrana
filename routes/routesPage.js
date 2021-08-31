const router = require('express').Router();
const db = require('../models');
const { Op } = require('sequelize');

router
    .get('/', async (req, res) => {
    // достаем первые 4 записи по маршрутам из db у кого больше лайков
    const arrRoutes = await db.route.findAll({
      order: [['likes', 'DESC']],
      limit: 4
    })
    res.render('routesPage', { arrRoutes });
    
    })

module.exports= router;
