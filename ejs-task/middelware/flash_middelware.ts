import { NextFunction, Request, Response } from "express";

function flash(req: Request, res: Response, next: NextFunction) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
}
module.exports = flash;


