const app = require('./app');
const port = 3000;
const sequelize = require('./config/db');

async function start() {
    try {
        await sequelize.authenticate();
        console.log("DB connected");

        app.listen(port, () => {
            console.log(`App listing on port ${port}`);
        })
    } catch (err) {
        console.log(err);
    }
}

start();