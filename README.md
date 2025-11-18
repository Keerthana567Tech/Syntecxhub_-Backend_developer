# User CRUD API (Express + MongoDB)

##  Features
- Create User
- Read Users (all + single)
- Update User
- Delete User
- Validations using Mongoose
- Tested with Postman

##  Folder Structure
user-crud-api
 ├── server.js
 ├── package.json
 ├── models
 │     └── user.model.js
 ├── routes
 │     └── user.routes.js

##  How to Run

1. Install dependencies  
   npm install

2. Start MongoDB (Compass automatically connects)

3. Start server  
   npm start  
   or  
   npm run dev

4. API Base URL  
   http://localhost:5000/api/users

##  API Endpoints

### Create User  
POST /api/users  
Body (JSON):  
{
  "name": "Keerthana",
  "email": "keerthana@example.com",
  "age": 20
}

### Get All Users  
GET /api/users

### Get Single User  
GET /api/users/:id

### Update User  
PUT /api/users/:id

### Delete User  
DELETE /api/users/:id
s