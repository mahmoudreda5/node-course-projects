const mongoose = require('mongoose');
const validator = require('validator');

const databaseName = 'task-manager-api';
const connectionUrl = `mongodb://127.0.0.1:27017/${databaseName}`;
mongoose.connect(connectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        default: 0,
        validate(age) {
            if(age < 0) {
                throw new Error('error age value!');
            }
        }
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(email) {
            if(!validator.isEmail(email)) {
                throw new Error('invalid email');
            }
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 6,
        validate(password) {
            if(password.toLowerCase().includes('password')) {
                throw new Error('invalid password');
            }
        }
    }
});

const Task = mongoose.model('Task', {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// const user = new User({
//     name: 'mahmoud reda',
//     email: 'pla@pla.com',
//     password: 'password'
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