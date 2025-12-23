const express = require('express');
const app = express();
const path= require('path');
const userRoutes = require('./routes/users_routes.ts');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', userRoutes);


app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

module.exports = app;
   
