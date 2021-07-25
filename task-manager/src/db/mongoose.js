const mongoose = require('mongoose');

const databaseName = 'task-manager-api';
const connectionUrl = `mongodb://127.0.0.1:27017/${databaseName}`;
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

// const user = new User({
//     name: 'mahmoud reda',
//     age: 27
// });
// user.save().then((user) => {
//     console.log(user);
// }).catch((error) => {
//     console.log('error', error)
// });

const task = new Task({
    description: 'i am your first task',
    completed: false
});

task.save().then((task) => {
    console.log(task);
}).catch(() => {
    console.log(error);
});