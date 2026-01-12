const { Authuser } = require('../models/authuser');
import { Request, Response } from 'express';

//Show List Page
exports.getUserPage = async (req: Request, res: Response) => {
  try {
    const users = await Authuser.findAll();
    res.render("users/list", { users });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

//Update User Page
exports.openEditPage = async (req: Request, res: Response) => {
  try {
    const user = await Authuser.findByPk(req.params.id);
    res.render("./users/edit", { user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

//Update User
exports.updateUser = async (req: Request, res: Response) => {
  try {
    const paramId = Number(req.params.id);

    const user = await Authuser.findByPk(paramId);
    if (!user) res.status(404).json({ message: "User with given Id not found" });

    const { name, email } = req.body;
    await Authuser.update({ name, email },
      { where: { email: user.email } }
    );
    res.json({ success: true });

  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

//Delete User Page
exports.openDeletePage = async (req: Request, res: Response) => {
  try {
    const user = await Authuser.findByPk(req.params.id);
    res.render("./users/delete", { user });
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

//Delate User
exports.deleteUser = async (req: Request, res: Response) => {
  try {
    const paramId = Number(req.params.id);

    const user = await Authuser.findByPk(paramId);
    if (!user) res.status(404).json({ message: "User with given Id not found" });

    await user.destroy();
    res.json({ success: true });

  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
}

