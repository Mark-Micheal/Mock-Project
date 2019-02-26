const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {            //Read all tasks
    res.send(tasks)
});

router.get('/:id', (req, res) => {            //Read specific task
    const taskId = req.params.id
    const task = tasks.find(tasks => tasks.id === taskId)
    res.send(task)
});

router.delete('/:id', (req, res) => {            //Delete
    const taskId = req.params.id 
    const task = tasks.find(tasks => tasks.id === taskId)
    const index = tasks.indexOf(task)
    admins.splice(index,1)
    res.send(tasks)
});

module.exports = router ;