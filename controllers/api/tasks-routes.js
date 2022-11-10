const router = require('express').Router();
const { Tasks } = require('../../models');

router.get('/completed_tasks', async (req, res) => {
    try{
        const taskData = await Tasks.findByPk(req.params.id);
        console.log(taskData)
        res.render ('task', taskData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('./complete', async (req, res) => {
    console.log(req.body);
    const { task_name } = req.body;

    console.log(task_name);

})


module.exports = router; 