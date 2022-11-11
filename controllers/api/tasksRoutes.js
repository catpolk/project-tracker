const router = require('express').Router();
const { Tasks } = require('../../models');

// /api/task/
router.get('/', async (req, res) => {
    const data = await Tasks.findAll({})
     if(data){
        const tasks = data.map(task => task.get( {plain: true} ))
        console.log(tasks);
        res.status(200).json(tasks);
      }
});

router.post('./complete', async (req, res) => {
    console.log(req.body);
    const { task_name } = req.body;

    console.log(task_name);

})


module.exports = router; 