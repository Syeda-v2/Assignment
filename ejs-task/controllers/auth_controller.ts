const { Authuser } = require('../models/authuser')
import { Request, Response } from 'express';

exports.getSignPage = async (req:Request ,res:Response) => {
    res.render('auth/signup');
}

exports.signUp = async (req:Request ,res:Response) => {
    try{
        const {name, email, password } = req.body;
        const userExists = await Authuser.findOne({where:{email}});
        
        if(userExists){
            (req as any).flash('success_msg', 'email is already exist');
            res.redirect('/auth/signup');
            console.log("email is already exist");
        }

        await Authuser.create({
            name,
            email,
            password
        });
        res.redirect('/auth/login');
        
    }catch(err:any){
        (req as any).flash('error_msg', 'something went wrong');
        return res.redirect('/auth/signup');
    }
}

exports.getLoginPage = async (req:Request ,res:Response) => {
    res.render('auth/login');
}

exports.loginUser = async (req:Request ,res:Response)=>{
    try{
        const {email,password} = req.body;
        const user = await Authuser.findOne({where:{email}});

        if(!user){
            (req as any).flash('error_msg', 'email not found');
            res.redirect('/auth/login',);
            console.log("email not found");
        }

        if(user.password!=password){
            (req as any).flash('error_msg', 'password is wrong');
            return res.redirect('/auth/login');
        }

        (req as any).session.user={
            id:user.id,
            email:user.email,
            password:user.password
        }
        return res.redirect('/api');
    }catch (err:any){
        return res.redirect('/auth/login');
    }
}

exports.logout = async (req:Request ,res:Response) => {
    req.session.destroy(()=>{
        (req as any).flash('success_msg', 'logged out successfully');
        return res.redirect('/auth/login');
    })
}

