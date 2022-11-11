const router = require('express').Router();
const { User, Task } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    res.render('homepage', {
      logged_in: req.session.logged_in
    });
  }
  catch (err) {
    res.status(500).json(err);
  }
});

router.get('/progress', async (req, res) => {
  try {
    const data = await Task.findAll({
      attributes: ['user.username', [sequelize.fn('COUNT', 'task.user_id'), 'completedTasks']],
      group: 'task.user_id',
      include: [{ model: User, required: true }]
    })

    const users = data.map(task => task.dataValues.user.username)
    const completedTasks = data.map(task => task.dataValues.completedTasks)

    res.render('progress', {
      users: users,
      completedTasks: completedTasks,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/roadmap', async (req, res) => {
  try {
    res.render('roadmap', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/planning', async (req, res) => {
  try {
    res.render('planning', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/users', async (req, res) => {
  try {
    res.render('users', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    const dbUserData = await User.findByPk(req.params.id, {
      include: [
        {
          model: Tasks,
          attributes: [
            'task_name',
            'user_id',
          ],
        },
      ],
    });

    const user = dbUserData.get({ plain: true });
    res.render('users', {
      user,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/login', async (req, res) => {
  try {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;