const mongoose = require('mongoose');
const validator = require('validator');

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

module.exports = User;