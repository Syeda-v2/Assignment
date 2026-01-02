const { Authuser } = require('../models/authuser')
import { Request, Response } from 'express';
const bcrypt = require('bcryptjs');

exports.getSignPage = async (req:Request ,res:Response) => {
    res.render('auth/signup');
}

exports.signUp = async (req:Request ,res:Response) => {
    try{
        const {name, email, password } = req.body;
        const userExists = await Authuser.findOne({where:{email}});
        
        if(userExists){
            req.flash('success_msg', 'email is already exist');
            res.redirect('/auth/signup');
        }
        const hashed = await bcrypt.hash(password,10);

        const newUser = await Authuser.create({name,email,password:hashed});

        req.session.user={
            id:newUser.id,
            name:newUser.name,
            email:newUser.email
        }

        res.redirect('/auth/login');
        
    }catch(err:any){
        req.flash('error_msg', 'something went wrong');
        console.log(err);
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
            req.flash('error_msg', 'email not found');
            res.redirect('/auth/login',);
        }
    
        bcrypt.compare(password, user.password, (err:any, result:any) => {
            if (err) {
                console.error('Error comparing passwords:', err);
                return;
            }
            if (result) {
                console.log('Passwords match! User authenticated.');
            } else {
                console.log('Passwords do not match! Authentication failed.');
            }
        });
        
        req.session.user={
            id:user.id,
            name:user.name,
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
        return res.redirect('/auth/login');
    })
}

