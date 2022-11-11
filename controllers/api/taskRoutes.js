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

//api/addtask
// router.post('/', async (req, res) => {
//     try{
//         const taskData = await Task.create({
//             user_id: req.body.user_id,
//         });
//         res.status(200).json(taskData);
//     } catch (err) {
//         res.status(400).json(err);
//     }
// });




module.exports = router; 