const { MongoClient, ObjectId } = require('mongodb');


const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectId()
// console.log(id)
// console.log(id.getTimestamp())

async function main() {
    // try {
    //     const client = await MongoClient.connect(connectionURL);
    //     console.log('Connected to database');

    //     const db = client.db(databaseName);

    //     // Find one document where name is 'Kevin'
    //     const user = await db.collection('user').findOne({ _id: new ObjectId("68ecfba11dc8bd1abd8a20ee") });

    //     if (!user) {
    //         console.log('User not found');
    //     } else {
    //         console.log('User found:', user);
    //     }

    //     client.close(); // Close connection when done
    // } catch (error) {
    //     console.error('Unable to connect to database:', error);
    // }

    try {
        const client = await MongoClient.connect(connectionURL);
        console.log('Connected to database');

        const db = client.db(databaseName);

        // // Find all users where age = 22
        // const users = await db.collection('user').find({ age: 22 }).toArray();

        // if (users.length === 0) {
        //     console.log('No users found');
        // } else {
        //     console.log('Users found:', users);
        // }

        // await client.close(); // Close the connection


        //     // Count how many users have age = 22
        // const count = await db.collection('user').countDocuments({ age: 22 });

        // if (count === 0) {
        //   console.log('No users found');
        // } else {
        //   console.log(`Users found: ${count}`);
        // }

        // await client.close(); // Always close the connection

        // } catch (error) {
        //     console.error('Unable to connect to database:', error);
        // }


        // Goal: Use findOne with task
        const task = await db.collection('tasks').findOne({
            _id: new ObjectId("68ecf6da905690604934c997")
        });

        if (!task) {
            console.log('Task not found');
        } else {
            console.log('Task found:', task);
        }

        await client.close(); // Close connection when done

    } catch (error) {
        console.error('Unable to connect to database:');
    }



    // try {
    //     const client = await MongoClient.connect(connectionURL);
    //     console.log('Connected to database');

    //     const db = client.db(databaseName);

    //     const result = await db.collection('user').insertOne({
    //         name: 'Kevin',
    //         age: 22
    //     });
    //     console.log('Documents inserted:', result.insertedCount);
    // } catch (error) {
    //     console.error('Error:', error);
    // }

    // try {
    //     const client = await MongoClient.connect(connectionURL);
    //     console.log('Connected to database');

    //     const db = client.db(databaseName);

    //     const result = await db.collection('tasks').insertMany([
    //         { description: 'Clean the house', completed: true },
    //         { description: 'Renew inspection', completed: false },
    //         { description: 'Pot plants', completed: false }
    //     ]);

    //     console.log('Documents inserted:', result.insertedCount);
    // } catch (error) {
    //     console.error('Error:', error);
    // }
}

main();



// // CRUD CREATE READ UPDATE DELETE

// const { MongoClient } = require('mongodb');

// const connectionURL = 'mongodb://127.0.0.1:27017';
// const databaseName = 'task-manager';

// MongoClient.connect(connectionURL)
//     .then(client => {
//         console.log('Connected to database');
//         const db = client.db(databaseName);

//         // ✅ insertMany for multiple documents
//     //     return db.collection('users').insertMany([
//     //         { name: 'Wailer', age: 24 },
//     //         { name: 'Oak', age: 24 }
//     //     ]);
//     // })
//     // .then(result => {
//     //     console.log('Documents inserted:', result.insertedCount);
//     // })
//     // .catch(error => {
//     //     console.error('Error:', error);
//         return db.collection('task').insertMany([
//             { description: 'Clean the house', completed: true },
//             { description: 'Renew inspection', completed: false },
//             { description: 'Pot pants', completed: false }
//         ]);
//     })
//     .then(result => {
//         console.log('Documents inserted:', result.insertedCount);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });




// // CRUD CREATE READ UPDATE DELETE

// const { MongoClient } = require('mongodb');

// const connectionURL = 'mongodb+srv://admin:admin@cluster0.kagbx0n.mongodb.net/?retryWrites=true&w=majority';
// const databaseName = 'task-manager';

// async function main() {
//     try {
//         const client = new MongoClient(connectionURL);
//         await client.connect();

//         console.log('Connected correctly');
//         const db = client.db(databaseName);

//         // Example: Insert a document
//         const result = await db.collection('users').insertOne({
//             name: 'Oak Wailer',
//             age: 24
//         });

//         console.log('Inserted:', result.insertedId);
//         await client.close();
//     } catch (error) {
//         console.error('Unable to connect to db', error);
//     }
// }

// main();



// // CRUD CREATE READ UPDATE DELETE

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to db')
//     }
//     db.collection('users').insertOne({
//         name: 'Oak Wailer',
//         age: 24
//     }, (error, result) => {
//         if (error) {
//             return console.log('unable to insert user')
//         }
//     });
// })