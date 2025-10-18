require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('68f1126c706fb84a674379aa').then((task) => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('68f1ef15d5430cd9b9edddfc').then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})