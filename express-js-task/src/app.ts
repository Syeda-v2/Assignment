require('dotenv').config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db")
const userRoutes = require("./routes/user_routes");
const errorhandler = require("./middleware/errorHandler");
const createTable = require("./data/createTable");
import type { Request, Response } from 'express';

const app = express();
// const port = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Error handler middelware
app.use(errorhandler);

//create table
createTable();

//Routes
app.use("/api", userRoutes);

//Testing Postgres Connection
app.get("/", async(req: Request,res: Response) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)
})

// app.listen(port, () =>{
//     console.log(`Server is running on http://localhost:${port}`)
// });

module.exports = app;