const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        return res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }
});

router.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    } catch(e) {
        res.status(500).send(e);
    }
});

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id;
    try {
        const user = await User.findById(_id);
        if(!user) {
            return res.status(404).send('User not found.');
        }
        return res.send(user);
    } catch (e) {
        return res.status(500).send(e);
    }
});

router.patch('/users/:id', async (req, res) => {
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const updates = Object.keys(req.body);
    const isValidUpdate = updates.every(item => {
        return allowedUpdates.includes(item);
    });

    if(!isValidUpdate) {
        return res.status(404).send('Invalid updates.');
    }
    const id = req.params.id;
    try {
        // const user = await User.findByIdAndUpdate(id, req.body, {
        //     new: true,
        //     runValidators: true
        // });

        const user = await User.findById(req.params.id);
        if(!user) {
            return res.status(404).send('User not found');
        }

        updates.forEach(update => user[update] = req.body[update]);
        await user.save();
        return res.send(user);
    } catch(e) {
        return res.status(400).send(e);
    }
});

router.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findByIdAndDelete(id);
        if(!user) {
            return res.status(404).send('User not found');
        }

        return res.send(user);
    } catch(e) {
        return res.status(500).send(e);
    }
});

module.exports = router;