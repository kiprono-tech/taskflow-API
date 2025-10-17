require('../src/db/mongoose')
const Task = require('../src/models/task')

// 68f0f358d398530bf0c2c287

Task.findByIdAndDelete('68f1126c706fb84a674379aa').then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})