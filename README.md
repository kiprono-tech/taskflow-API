## 🟢 **About (for GitHub repository description)**

> **TaskFlow** is a modern Node.js and Express-based task management API that allows users to create, manage, and track personal or collaborative tasks securely. It features JWT-based authentication, file uploads for avatars, and integrates with Brevo (formerly Sendinblue) for transactional emails such as welcome and cancellation messages. Built with MongoDB and Mongoose, TaskFlow ensures data persistence, validation, and scalability for real-world productivity applications.

---

## 🧾 **README.md**

```markdown
# 🗂️ TaskFlow

TaskFlow is a **Node.js + Express** application for managing users and tasks with secure authentication and real-time email notifications.  
It’s designed to demonstrate how to build a RESTful API with robust authentication, file uploads, and MongoDB integration using **Mongoose**.

---

## 🚀 Features

✅ User registration and login with JWT authentication  
✅ Password encryption with bcrypt  
✅ CRUD operations for user tasks  
✅ File upload for user avatars using multer  
✅ Email notifications (welcome and cancellation) via Brevo API  
✅ Middleware for authentication and route protection  
✅ Automated testing with Jest and Supertest  
✅ MongoDB data validation using Mongoose  
✅ Auto-delete of tasks when a user account is removed  

---

## 🏗️ Project Structure

```

TaskFlow/
│
├── src/
│   ├── app.js               # Express application setup
│   ├── db/mongoose.js       # MongoDB connection setup
│   ├── index.js             # Server entry point
│   ├── middleware/
│   │   └── auth.js          # JWT authentication middleware
│   ├── models/
│   │   ├── user.js          # User model with tokens, password hashing
│   │   └── task.js          # Task model linked to users
│   ├── routers/
│   │   ├── user.js          # Routes for signup, login, profile, etc.
│   │   └── task.js          # Routes for task CRUD operations
│   ├── emails/
│   │   └── account.js       # Brevo email templates (welcome, goodbye)
│   └── utils/
│       └── messages.js      # (optional helper utilities)
│
├── tests/
│   ├── fixtures/db.js       # Test database setup
│   ├── user.test.js         # Jest tests for users
│   └── task.test.js         # Jest tests for tasks
│
├── package.json
├── .env                     # Environment variables
└── README.md

````

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the repository
```bash
git clone https://github.com/<your-username>/TaskFlow.git
cd TaskFlow
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Set environment variables

Create a `.env` file in the root directory and add:

```bash
PORT=3000
MONGODB_URL=mongodb://127.0.0.1:27017/taskflow-api
JWT_SECRET=your_secret_key
BREVO_API_KEY=your_brevo_api_key
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Server will start at:

```
http://localhost:3000
```

---

## 🧩 API Endpoints

### 🔐 **User Routes**

| Method | Endpoint                | Description                       |
| ------ | ----------------------- | --------------------------------- |
| POST   | `/users`                | Register new user                 |
| POST   | `/users/login`          | Login user                        |
| GET    | `/users/profile`        | Get user profile (requires token) |
| PATCH  | `/users/profile`        | Update profile                    |
| DELETE | `/users/profile`        | Delete user                       |
| POST   | `/users/profile/avatar` | Upload avatar                     |

### 📝 **Task Routes**

| Method | Endpoint     | Description                            |
| ------ | ------------ | -------------------------------------- |
| POST   | `/tasks`     | Create a new task                      |
| GET    | `/tasks`     | Fetch all tasks for authenticated user |
| PATCH  | `/tasks/:id` | Update a task                          |
| DELETE | `/tasks/:id` | Delete a task                          |

---

## 🔐 Authentication

This project uses **JWT (JSON Web Tokens)** for securing routes.
Every protected route requires a token in the header:

```
Authorization: Bearer <your_token_here>
```

Tokens are generated upon user login or registration and stored in the user’s `tokens` array.

---

## ✉️ Email Notifications

TaskFlow uses **Brevo (Sendinblue)** for transactional emails:

* **Welcome Email** — sent upon successful signup
* **Cancellation Email** — sent when a user deletes their account

---

## 🧪 Running Tests

TaskFlow includes comprehensive Jest tests for API endpoints.

Run all tests with:

```bash
npm test
```

Tests include:

* User signup, login, and profile access
* Task creation and CRUD operations
* Image upload for avatars
* Authentication validation

---

## 🛠️ Tech Stack

| Category          | Technology            |
| ----------------- | --------------------- |
| Language          | JavaScript (Node.js)  |
| Framework         | Express.js            |
| Database          | MongoDB with Mongoose |
| Authentication    | JSON Web Token (JWT)  |
| Testing           | Jest, Supertest       |
| Email Service     | Brevo (Sendinblue)    |
| Password Security | bcryptjs              |
| File Upload       | multer                |

---

## 👤 Author

**Vincent Kiprono**
📧 [kiprono.tech@gmail.com](mailto:kiprono.tech@gmail.com)
💻 GitHub: [@KipronoVincent](https://github.com/KipronoVincent)

---

## 📄 License

This project is licensed under the **MIT License** – you’re free to use, modify, and distribute it with attribution.

---

## 🌟 Acknowledgements

* [Mongoose](https://mongoosejs.com/)
* [Express](https://expressjs.com/)
* [Brevo](https://www.brevo.com/)
* [Jest](https://jestjs.io/)
* [Supertest](https://github.com/visionmedia/supertest)

---

> “TaskFlow helps you stay organized, productive, and connected — one task at a time.”

```

---
