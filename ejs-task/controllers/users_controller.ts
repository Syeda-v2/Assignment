const { Authuser } = require('../models/authuser');
import { Request, Response } from 'express';

//Show List Page
exports.getUserPage = async (req:Request ,res:Response) => {
  try{
    if(req.session.user){
      const users = await Authuser.findAll();
      console.log(users);
      res.render("users/list",{users});
    }else{
      console.log("no access");
    }
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

 //Show Edit Page
exports.getEditPage = async(req:Request ,res:Response) => {
  try{
    const userId = req.session.user?.id;
    const paramId = Number(req.params.id);

    if(userId == paramId){
      const user = await Authuser.findByPk(userId);
      res.render("./users/edit",{user});
    }else{
      req.flash('error_msg', 'cannot update other users');
      res.redirect('/api');
    }
  
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

//Update User
exports.updateUser = async(req:Request,res:Response) => {
  try{
    const userId = req.session.user?.id;
    
      const user = await Authuser.findByPk(userId);
      if(!user) res.status(404).json({message : "User with given Id not found"});

      const {name, email} = req.body;
      await Authuser.update({name,email},
        {where: {email:user.email}}
      );
      res.redirect("/api");
   
  }catch(err:any){
   res.status(400).json({ error: err.message });
  }
}

//Delate User
exports.deleteUser = async (req:Request ,res:Response) => {
  try{
    const userId = req.session.user?.id;
    const paramId = Number(req.params.id);

    if(userId == paramId){
      const user = await Authuser.findByPk(paramId);
      if(!user) res.status(404).json({message : "User with given Id not found"});

      await user.destroy();
    
      req.session.destroy(()=>{
      res.redirect("/api");
    })
    }else{
      req.flash('error_msg', 'cannot delete other users');
      res.redirect('/api');
    }
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

