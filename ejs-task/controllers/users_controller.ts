const { User } = require('../models/user');
import { Request, Response } from 'express';


//Show List Page
exports.getUserPage = async (req:Request ,res:Response) => {
  try{
    const users = await User.findAll();
    console.log(users);
    res.render("users/list",{users});
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

//Show Create Page
exports.getCreatePage = async (req:Request ,res:Response) => {
  try{
    res.render("./users/create");
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

//Craete User
exports.craeteUser = async(req:Request ,res:Response) => {
  try {
   const {name,email} = req.body;
    await User.create({name,email});
    res.redirect("/api");
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
} 

//Show Edit Page
exports.getEditPage = async(req:Request ,res:Response) => {
  try{
    const user = await User.findByPk(req.params.id);
    res.render("./users/edit",{user});
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

//Update User
exports.updateUser = async(req:Request,res:Response) => {
  try{
    const user = await User.findByPk(req.params.id);
    if(!user) res.status(404).json({message : "User with given Id not found"});

    const {name, email} = req.body;
    await user.update({name,email});
    res.redirect("/api");
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

//Delate User
exports.deleteUser = async (req:Request ,res:Response) => {
  try{
    // console.log("User model", User);
    const user = await User.findByPk(req.params.id);
    if(!user) res.status(404).json({message : "User with given Id not found"});

    await user.destroy();
    res.redirect("/api");
  }catch(err:any){
    res.status(400).json({ error: err.message });
  }
}

