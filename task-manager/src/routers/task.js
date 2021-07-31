const express = require('express');
const taskRouter = express.Router();

const Task = require('../models/task');
const auth = require('../middleware/auth');


taskRouter.post('/tasks', auth, async (req, res) => {
    // const task = new Task(req.body);
    const task = new Task({
        ...req.body,
        owner: req.user._id
    });
    try {
        await task.save();
        return res.status(201).send(task);
    } catch(e) {
        return res.status(400).send(e);
    }
})

taskRouter.get('/tasks', auth, async (req, res) => {
    // const owner = req.user._id;
    try {
        // const tasks = await Task.find({ owner });
        const user = req.user;
        await user.populate('tasks').execPopulate();
        return res.send(user.tasks);
    } catch(e) {
        return res.status(500).send(e);
    }
});

taskRouter.get('/tasks/:id', auth, async (req, res) => {
    const _id = req.params.id;
    const owner = req.user._id;
    try {
        // const task = await Task.findById(_id);
        const task = await Task.findOne({ _id, owner });
        if(!task) {
            return res.status(404).send('Task not found!');
        }
        return res.send(task);
    } catch (e) {
        return res.status(500).send(e);
    }
});

taskRouter.patch('/tasks/:id', auth, async (req, res) => {
    const allowedUpdates = ['description', 'completed'];
    const updates = Object.keys(req.body);
    const isUpdateValid = updates.every(item => {
        return allowedUpdates.includes(item);
    });
    if(!isUpdateValid) {
        return res.status(400).send('Invalid updates');
    }

    // const id = req.params.id;
    const _id = req.params.id;
    const owner = req.user._id;
    try {
        // const task = await Task.findByIdAndUpdate(id, req.body, {
        //     new: true,
        //     runValidators: true
        // });
        // const task = await Task.findById(id);
        const task = await Task.findOne({ _id, owner });
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

taskRouter.delete('/tasks/:id', auth, async (req, res) => {
    // const id = req.params.id;
    const _id = req.params.id;
    const owner = req.user._id;
    try {
        // const task = await Task.findByIdAndDelete(id);
        const task = await Task.findOneAndDelete({ _id, owner });
        if(!task) {
            return res.status(404).send('Task not found');
        }

        return res.send(task);
    } catch (e) {
        return res.status(500).send(e);
    }
});

module.exports = taskRouter;