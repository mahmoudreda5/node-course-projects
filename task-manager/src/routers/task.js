const express = require('express');
const taskRouter = express.Router();

const Task = require('../models/task');


taskRouter.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        await task.save();
        return res.status(201).send(task);
    } catch(e) {
        return res.status(400).send(e);
    }
})

taskRouter.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.send(tasks);
    } catch(e) {
        return res.status(500).send(e);
    }
});

taskRouter.get('/tasks/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const task = await Task.findById(_id);
        if(!task) {
            return res.status(404).send('Task not found!');
        }
        return res.send(task);
    } catch (e) {
        return res.status(500).send(e);
    }
});

taskRouter.patch('/tasks/:id', async (req, res) => {
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys(req.body);
    const isUpdateValid = updates.every(item => {
        return allowedUpdates.includes(item);
    });
    if(!isUpdateValid) {
        return res.status(400).send('Invalid updates');
    }

    const id = req.params.id;
    try {
        // const task = await Task.findByIdAndUpdate(id, req.body, {
        //     new: true,
        //     runValidators: true
        // });
        const task = await Task.findById(req.params.id);
        console.log(task);
        if(!task) {
            return res.status(404).send('Task not found');
        }

        updates.forEach(update => task[update] = req.body[update]);
        await task.save();
        return res.send(task);
    } catch (e) {
        return res.status(400).send(e)
    }
});

taskRouter.delete('/tasks/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const task = await Task.findByIdAndDelete(id);
        if(!task) {
            return res.status(404).send('Task not found');
        }

        return res.send(task);
    } catch (e) {
        return res.status(500).send(e);
    }
});

module.exports = taskRouter;