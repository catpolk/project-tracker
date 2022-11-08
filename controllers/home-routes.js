const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;