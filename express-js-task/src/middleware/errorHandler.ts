import type { Request, Response, NextFunction } from "express";

const errorhandler = (err: any, req:Request, res:Response, next:NextFunction) => {
    console.log(err.stack);
    res.status(500).json({
        staus: 500,
        message: "Something went wrong",
        error: err.message,
    });
};

module.exports = errorhandler;
