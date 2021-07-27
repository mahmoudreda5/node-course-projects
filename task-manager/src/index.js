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

app.post('/users', (req, res) => {
    const user = new User(req.body);
    user.save().then(user => {
        return res.status(201).send(user);
    }).catch(error => {
        return res.status(400).send(error);
    });
});

app.post('/tasks', (req, res) => {
    const task = new Task(req.body);
    task.save().then(task => {
        return res.status(201).send(task);
    }).catch(error => {
        return res.status(400).send();
    });
})

app.get('/users', (req, res) => {
    User.find({}).then(users => {
        return res.send(users);
    }).catch(error => {
        return res.status(500).send(error);
    });
});

app.get('/users/:id', (req, res) => {
    const _id = req.params.id;
    User.findById(_id).then(user => {
        if(!user) {
            return res.status(404).send('User not found');
        }
        return res.send(user);
    }).catch(error => {
        return res.status(500).send(error);
    });
});

app.get('/tasks', (req, res) => {
    Task.find().then(tasks => {
        return res.send(tasks);
    }).catch(error => {
        return res.status(500).send(error);
    }); 
});

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id;
    Task.findOne({_id}).then(task => {
        if(!task) {
            return res.status(404).send('task not found');
        }
        return res.send(task);
    }).catch(error => {
        return res.status(500).send(error);
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port} ..`);
});