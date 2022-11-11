const router = require('express').Router();
const { User, Task } = require('../models');
const withAuth = require('../utils/auth');
const sequelize = require('../config/connection');

// Prevent non logged in users from viewing the homepage
router.get('/', async (req, res) => {
  try {
    const data = await User.findAll({
      include: [Task]
    })
    if (data) {
      const user = data.map(user => user.get({ plain: true }))
      console.log(user);
      console.log(user[0].tasks);
      console.log(user[0].tasks.length);

      res.render('homepage', {});
    }
  } catch (err) {
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

    res.render('progress', { users: users, completedTasks: completedTasks });
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
    res.render('user', { user });
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
    res.render('login', {});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;