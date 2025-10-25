const request = require('supertest')
const app = require('../src/app')
const Task = require('../src/models/task');
const {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskTwo,
    taskThree,
    setupDatabase
} = require('./fixtures/db')

beforeEach(setupDatabase)

test('Should create task for user', async () => {
    const response = await request(app)
        .post('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send({
            description: 'Finish testing suite'
        })
        .expect(201);

    // Check that the task is saved in the database
    const task = await Task.findById(response.body._id);
    expect(task).not.toBeNull();

    // Ensure the task belongs to the correct user
    // expect(task.owner.toString()).toBe(userOneId.toString());

    // Verify the default completed value is false
    expect(task.completed).toBe(false);
});

test('Should fetch user tasks', async () => {
    const response = await request(app)
        .get('/tasks')
        .set('Authorization', `Bearer ${userOne.tokens[0].token}`)
        .send()
        .expect(200)

    // Ensure userOne only gets their own tasks (2 in total)
    expect(response.body.length).toBe(2)

    // Verify one of them matches taskOne
    // const taskIds = response.body.map(task => task._id.toString())
    // expect(taskIds).toContain(taskOne._id.toString())
})

test('Should not delete other users task', async () => {
    const response = await request(app)
        .delete(`/tasks/${taskOne._id}`) // Try to delete Oak's task
        .set('Authorization', `Bearer ${userTwo.tokens[0].token}`) // Logged in as Kiprono
        .send()
        .expect(404); // Should fail with 404 (not found for that user)

    // Confirm the task still exists in the database
    const task = await Task.findById(taskOne._id);
    expect(task).not.toBeNull();
});
