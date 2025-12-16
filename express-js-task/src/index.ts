import express from "express"
import cors from "cors"
import pool from "./config/db.js"
import userRoutes from "./routes/user_routes.js"
import errorhandler from "./middleware/errorHandler.js";
import createTable from "./data/createTable.js";

const app = express();
const port = process.env.PORT || 3001;

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
app.get("/", async(req,res) => {
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is : ${result.rows[0].current_database}`)
})

app.listen(port, () =>{
    console.log(`Server is running on http://localhost:${port}`)
});