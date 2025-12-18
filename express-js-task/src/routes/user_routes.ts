const express = require('express');
const { createUser, 
    deleteUser, 
    getAllUser, 
    getUserByID, 
    updateUser } = require('../controller/userController.js');
const validateSchema = require('../middleware/validation.js');
const routes = express.Router();

//Routes
routes.post("/users", validateSchema, createUser);
routes.get("/users", getAllUser);
routes.get("/users/:id", getUserByID);
routes.put("/users/:id", validateSchema, updateUser);
routes.delete("/users/:id", deleteUser);

module.exports = routes;
