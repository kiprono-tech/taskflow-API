require('../src/db/mongoose')
const User = require('../src/models/user')

// 68f0f358d398530bf0c2c287

User.findByIdAndUpdate('68f0f365d398530bf0c2c289', { age: 20 }).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 20 })
}).then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})