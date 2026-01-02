'use strict';
const { Model, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

export class Authuser extends Model {
   declare name:string;
   declare email:string;
   declare password:string;
  }
  Authuser.init({
    name: {
     type:DataTypes.STRING,
     allowNull:false
    },
    email:{
      type:DataTypes.STRING,
      allowNull:false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Authuser',
  });
 