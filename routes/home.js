const { Router } = require('express');

const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
  const main = true;
  res.render('index', {
    layout: false, main
  });

});

router.get('/routes', async (req, res) => {
  const arrayOfRoutes = await db.route.findAll();
  console.log(arrayOfRoutes);
  res.render('index', { 
    routes: true,
    routesList: arrayOfRoutes,
   });
});

module.exports = router;
