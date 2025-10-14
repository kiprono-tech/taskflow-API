const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api')

// Define a User model
const Task = mongoose.model('Task', {
    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
})

// Create and save a user
const task = new Task({
    description: 'Learn the Mongoose library',
    completed: false
})

task.save().then(() => {
    console.log(task)
}).catch(() => {
    console.log('Error!', error)
})

// // Create and save a user
// const me = new User({
//     name: 'John',
//     age: 24
// })

// me.save().then(() => {
//     console.log(me)
// }).catch(() => {
//     console.log('Error!', error)
// })