import type { Request, Response, NextFunction } from "express";
import { deleteUserService, 
    getUserByIdService, 
    getUserService, 
    updateUserService, 
    createUserService } from "../models/user_models.js";
import type { createUserBody, userParams } from "../types/types.js";

// interface createUserBody{
//     name: string;
//     email: string;
// }
// interface userParams{
//     id:number;
// }

const handleResponse = <T>(res:Response, status:number, message:string, data: null | T): Response => {
    return res.status(status).json({
        status,
        message,
        data,
    });
};

export const createUser = async (req:Request<{},{},createUserBody>, res:Response, next:NextFunction) => {
    const {name, email} = req.body;
    try{
        const newUser= await createUserService(name, email);
        handleResponse(res, 201, "user created successfully", newUser);
    }catch(err) {
        next(err);
    }
}

export const getAllUser = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const users = await getUserService();
        handleResponse(res, 200, "User fecthed Successfully", users);
    }catch(err) {
        next(err);
    }
}

export const getUserByID = async (req:Request<userParams>, res:Response, next:NextFunction) => {
    try{
        const user = await getUserByIdService(req.params.id);
        if(!user) handleResponse(res, 404, "User not found with given Id", null);
        handleResponse(res, 200, "User fecthed Successfully", user);
    }catch(err) {
        next(err);
    }
}

export const updateUser = async (req:Request, res:Response, next:NextFunction) => {
    const {name, email} = req.body;
    const {id} = req.params;
    try{
        const updateUser = await updateUserService(Number(id), name, email);
        if(!updateUser) handleResponse(res, 404, "User not found with given Id", null);
        handleResponse(res, 200, "Updated Successfully", updateUser);
    }catch(err){
        next(err);
    }
}

export const deleteUser = async (req:Request<userParams>, res:Response, next:NextFunction) => {
    try{
        const deleteUser = await deleteUserService(req.params.id);
        if(!deleteUser) handleResponse(res, 404, "User not found with given Id", null);
        handleResponse(res, 200, "User deleted Successfully", deleteUser);
    }catch(err) {
        next(err);
    }
}