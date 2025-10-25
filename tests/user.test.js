const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')
const { userOneId, userOne, setupDatabase } = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should signup a new user', async () => {
    const response = await request(app).post('/users').send({
        name: "Oak Wailer",
        email: "vincentkiprono38@gmail.com",
        password: "vincent12345"
    }).expect(201)

    // Assert that the database was changed correctly
    const user = await User.findById(response.body.user._id)
    expect(user).not.toBeNull()

    // Asertions about the response
    expect(response.body).toMatchObject({
        user: {
            name: "Oak Wailer",
            email: "vincentkiprono38@gmail.com"
        },
        token: user.tokens[0].token
    })
    expect(user.password).not.toBe('vincent12345')
});

test('Should login existing user', async () => {
    const response = await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
    const user = await User.findById(userOneId)
    expect(response.body.token).toBe(user.tokens[1].token)
    
});

test('Should not login nonexistent user', async () => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'wrongpassword123'
    }).expect(400)
})

test('Should get profile for user', async () => {
    await request(app)
        .get('/users/profile')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
})

test('Should not get profile for unauthenticated user', async () => {
    await request(app)
        .get('/users/profile')
        .send()
        .expect(401)
})

test('Should delete account for authenticated user', async () => {
    await request(app)
        .delete('/users/profile')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)
    const user = await User.findById(userOneId)
    expect(user).toBeNull()
})

test('Should not delete account for unauthenticated user', async () => {
    await request(app)
        .delete('/users/profile')
        .send()
        .expect(401)
})

test('Should upload avatar image', async () => {
    // const filePath = path.join(__dirname, 'fixtures', 'burger.png');

    await request(app)
        .post('/users/profile/avatar')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        // .attach('avatar', filePath)
        .attach('avatar', 'tests/fixtures/burger.png')
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.avatar).toEqual(expect.any(Buffer));
});

test('Should update valid user fields', async () => {
    await request(app)
        .patch('/users/profile')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            name: 'Vincent Updated'
        })
        .expect(200);

    const user = await User.findById(userOneId);
    expect(user.name).toBe('Vincent Updated');
});

test('Should not update invalid user fields', async () => {
    await request(app)
        .patch('/users/profile')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            location: 'Kenya' // field not allowed in schema
        })
        .expect(400);
});
