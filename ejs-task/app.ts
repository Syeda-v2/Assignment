const express = require('express');
const app = express();
const path= require('path');
const userRoutes = require('./routes/users_routes.ts');
const authRouter = require('./routes/auth_routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
import "express-session";
const flash_middelware = require('./middelware/flash_middelware');

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret:"mysecret123",
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60,
    }
}))
declare module "express-session"{
    interface SessionData{
        user?:{
        id:number;
        name:string;
        email:string;
        password?:string
        }
    }
}

declare global{
    namespace Express{
        interface Request{
            flash(type:string, message:string):void;
            flash(type:string):string[];
        }
    }
}
app.use(flash());
app.use(flash_middelware);

app.use('/api', userRoutes);
app.use('/auth', authRouter);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

module.exports = app;
   
