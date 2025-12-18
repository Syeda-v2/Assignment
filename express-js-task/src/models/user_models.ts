const pool = require('../config/db');

interface User{
    name: string;
    email: string;
}
const getUserService = async () => {
    const result = await pool.query("SELECT * FROM users");
    return result.rows;
};
const getUserByIdService = async (id: number)=> {
    const result = await pool.query(
        "SELECT * FROM users WHERE id = $1", 
        [id]
    );
    return result.rows[0];
};
 const createUserService = async (name: String, email: String)=> {
    const result = await pool.query(
        "INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",
        [name,email]
    );
    return result.rows[0];
};
 const updateUserService = async (id: Number, name:String, email:String)=> {
    const result = await pool.query(
        "UPDATE users SET name=$1, email=$2 WHERE id=$3 RETURNING *",
        [name,email,id]
    );
    return result.rows[0];
};
 const deleteUserService = async (id:Number) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id=$1 RETURNING *",
        [id]
    );
    return result.rows[0];
};

module.exports = { getUserService, 
    getUserByIdService, 
    createUserService, 
    updateUserService, 
    deleteUserService };

