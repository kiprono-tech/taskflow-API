require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('68f0f365d398530bf0c2c289', { age: 20 }).then((user) => {
//     console.log(user)
//     return User.countDocuments({ age: 20 })
// }).then((result) => {
//     console.log(result)
// }).catch((error) => {
//     console.log(error)
// })

const updateAgeAndCount = async ( id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

updateAgeAndCount('68f0f473d398530bf0c2c28b', 2).then((count) => {
    console.log(count)
}).catch((error) => {
    console.log(error)
})