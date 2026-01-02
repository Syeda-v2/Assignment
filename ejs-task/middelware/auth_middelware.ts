import { NextFunction, Request, Response } from "express";

function isAuth(req:Request ,res:Response ,next:NextFunction){
    if(!(req.session as any).user){
        return res.redirect('/auth/login');
    }
    next();
}
module.exports=isAuth;
