const router = require('express').Router();
const { User, Task, Message } = require('../models');
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
//end point to the progress menu 
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

//tasks end point 
router.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.findAll({});
    const users = await User.findAll({});

    res.render('tasks', {
      tasks: tasks,
      users: users,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//tasks end point 
router.post('/tasks', async (req, res) => {
  try {
    console.log(req.body);

    const task = await Task.findByPk(req.body.taskId);
    task.user_id = req.body.userId;
    task.save();

    res.redirect('/progress');
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/users', async (req, res) => {
  try {
    const userData = await User.findAll({
      include: [
        {
          model: Task,
        },
      ],
    });

    // Serialize data so the template can read it
    const users = userData.map((project) => project.get({ plain: true }));
    res.render('users', {
      users,
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

router.get('/planning', async (req, res) => {
  try {
    const messageData = await Message.findAll();
    console.log('yo')
    console.log(messageData)
    const messages = messageData.map((message) => message.get({ plain: true }));
    console.log(messages)
    res.render('planning', {
      messages,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/message', withAuth, async (req, res) => {
  try {
    res.render('message', {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;