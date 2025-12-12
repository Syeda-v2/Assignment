import { deleteUserService, getUserByIdService, getUserService, updateUserService, createUserService } from "../models/user_models.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({
        status,
        message,
        data,
    });
};

export const createUser = async (req, res, next) => {
    const {name, email} = req.body;
    try{
        const newUser = await createUserService(name, email);
        handleResponse(res, 201, "user created successfully", newUser);
    }catch(err) {
        next(err);
    }
}

export const getAllUser = async (req, res, next) => {
    try{
        const users = await getUserService();
        handleResponse(res, 200, "User fecthed Successfully", users);
    }catch(err) {
        next(err);
    }
}

export const getUserByID = async (req, res, next) => {
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user) handleResponse(res, 404, "User not found with given Id");
        handleResponse(res, 200, "User fecthed Successfully", user);
    }catch(err) {
        next(err);
    }
}

export const updateUser = async (req, res, next) => {
    const {name, email} = req.body;
    try{
        const updateUser = await updateUserService(req.params.id, name, email);
        if(!updateUser) handleResponse(res, 404, "User not found with given Id");
        handleResponse(res, 200, "Updated Successfully", updateUser);
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req, res, next) => {
    try{
        const deleteUser = await deleteUserService(req.params.id);
        if(!deleteUser) handleResponse(res, 404, "User not found with given Id");
        handleResponse(res, 200, "User deleted Successfully", deleteUser);
    }catch(err) {
        next(err);
    }
}