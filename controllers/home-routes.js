const router = require('express').Router();
const { Users, Tasks } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const data = await Users.findAll({
      include: [Tasks]
    })
    if(data){
      const users = data.map(user => user.get( {plain: true} ))
      console.log(users);
      console.log(users[0].tasks);
      console.log(users[0].tasks.length);
      
      res.render('homepage', {});
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/progress', async (req, res) => {
  try {
    res.render('progress', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/roadmap', async (req, res) => {
  try {
    res.render('roadmap', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/planning', async (req, res) => {
  try {
    res.render('planning', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/users', async (req, res) => {
  try {
    res.render('users', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;