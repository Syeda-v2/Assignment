'use strict';
const { Model,DataTypes} = require('sequelize');
const sequelize = require('../config/db');

export class User extends Model{
  declare name: string;
  declare email: string;
}
User.init({
  name:{
    type:DataTypes.STRING,
    allowNull:false
  },
  email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique: true
  },
  }, {
    sequelize,
    modelName: 'User',
  });


