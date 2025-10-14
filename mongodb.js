const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionURL)
    .then((client) => {
        console.log('Connected successfully to MongoDB');
        const db = client.db(databaseName);

        return db.collection('tasks').deleteOne(
            { description: 'Pot plants' }
        );
    })
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error(error);
    }
);


// MongoClient.connect(connectionURL)
//     .then((client) => {
//         console.log('Connected successfully to MongoDB');
//         const db = client.db(databaseName);

//         return db.collection('user').deleteMany(
//             { age: 23 }
//         );
//     })
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.error(error);
//     }
// );

// MongoClient.connect(connectionURL)
//     .then((client) => {
//         console.log('Connected successfully to MongoDB');
//         const db = client.db(databaseName);

//         return db.collection('tasks').updateMany(
//             { completed: false },
//             { $set: { completed: true } }
//         );
//     })
//     .then((result) => {
//         console.log(result.modifiedCount);
//     })
//     .catch((error) => {
//         console.error('Error during update:', error);
//     }
// );

// MongoClient.connect(connectionURL)
//     .then((client) => {
//         console.log('Connected successfully to MongoDB');
//         const db = client.db(databaseName);

//         return db.collection('user').updateOne(
//             { _id: new ObjectId("68ecfba11dc8bd1abd8a20ee") },
//             { $inc: { age: 1 } }
//         );
//     })
//     .then((result) => {
//         console.log('Update successful:', result);
//     })
//     .catch((error) => {
//         console.error('Error during update:', error);
//     }
// );
