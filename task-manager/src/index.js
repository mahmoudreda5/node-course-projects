const express = require('express');
require('./db/mongoose');
const User = require('./models/user');
const task = require('./models/task');
const Task = require('./models/task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('', (req, res) => {
    return res.send('i am index');
});

app.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        return res.status(201).send(user);
    } catch (e) {
        res.status(400).send(e);
    }

    // user.save().then(user => {
    //     return res.status(201).send(user);
    // }).catch(error => {
    //     return res.status(400).send(error);
    // });
});

app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    try {
        const task = await task.save();
        return res.status(201).send(user);
    } catch(e) {
        return res.status(400).send(e);
    }
    // task.save().then(task => {
    //     return res.status(201).send(task);
    // }).catch(error => {
    //     return res.status(400).send();
    // });
})

app.get('/users', async (req, res) => {
    try{
        const users = await User.find();
        res.send(users);
    } catch(e) {
        res.status(500).send(e);
    }

    // User.find({}).then(users => {
    //     return res.send(users);
    // }).catch(error => {
    //     return res.status(500).send(error);
    // });
});

app.get('/users/:id', async (req, res) => {
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
    // User.findById(_id).then(user => {
    //     if(!user) {
    //         return res.status(404).send('User not found');
    //     }
    //     return res.send(user);
    // }).catch(error => {
    //     return res.status(500).send(error);
    // });
});

app.patch('/users/:id', async (req, res) => {
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
        const user = await User.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if(!user) {
            return res.status(404).send('User not found');
        }
        return res.send(user);
    } catch(e) {
        return res.status(400).send(e);
    }
});

app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        return res.send(tasks);
    } catch(e) {
        return res.status(500).send(e);
    }
    // Task.find().then(tasks => {
    //     return res.send(tasks);
    // }).catch(error => {
    //     return res.status(500).send(error);
    // }); 
});

app.get('/tasks/:id', async (req, res) => {
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
    // Task.findOne({_id}).then(task => {
    //     if(!task) {
    //         return res.status(404).send('task not found');
    //     }
    //     return res.send(task);
    // }).catch(error => {
    //     return res.status(500).send(error);
    // });
});

app.patch('/tasks/:id', async (req, res) => {
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
        const task = await Task.findByIdAndUpdate(id, req.body, {
            new: true,
            runValidators: true
        });
        if(!task) {
            return res.status(404).send('Task not found');
        }

        return res.send(task);
    } catch (e) {
        return res.status(400).send(e)
    }
});

app.listen(port, () => {
    console.log(`Server is up on port ${port} ..`);
});