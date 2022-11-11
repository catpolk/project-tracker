const router = require('express').Router();

const userRoutes = require('./userRoutes');
const tasksRoutes = require('./tasksRoutes');

router.use('/user', userRoutes);
router.use('/task', tasksRoutes);

module.exports = router;
