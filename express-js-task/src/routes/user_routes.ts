import express from 'express';
import { createUser, 
    deleteUser, 
    getAllUser, 
    getUserByID, 
    updateUser } from '../controller/userController.js';
import validateSchema from '../middleware/validation.js';
const routes = express.Router();

//Routes
routes.post("/users", validateSchema, createUser);
routes.get("/users", getAllUser);
routes.get("/users/:id", getUserByID);
routes.put("/users/:id", validateSchema, updateUser);
routes.delete("/users/:id", deleteUser);

export default routes;
