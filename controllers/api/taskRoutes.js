const router = require('express').Router();
const { Task } = require('../../models');

// /api/task/ this route is for dropdown menu 
router.get('/', async (req, res) => {
  const data = await Task.findAll({})
  if (data) {
    const tasks = data.map(task => task.get({ plain: true }))
    console.log(tasks);
    res.status(200).json(tasks);
  }
});

module.exports = router; 