const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// Define a User model
const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim:true
    },
    email: {
        type: String,
        require: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        },
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    }
})

// Create and save a user
const me = new User({
    name: 'wailer',
    email: 'wailer@gmail.com',
    age: 24
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})

// // Create and save a task
// const task = new Task({
//     description: 'Learn the Mongoose library',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch(() => {
//     console.log('Error!', error)
// })
