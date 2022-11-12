const router = require('express').Router();
const userRoutes = require('./userRoutes');
const taskRoutes = require('./taskRoutes');
const messageRoutes = require('./messageRoutes')

router.use('/user', userRoutes);
router.use('/task', taskRoutes);
router.use('/message', messageRoutes)

module.exports = router;
