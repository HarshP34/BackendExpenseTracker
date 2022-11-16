const { INTEGER, STRING } = require('sequelize');
const Sequelize=require('sequelize');

const sequelize = require('../util/database');

const User=sequelize.define('expenseusers',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        unique: true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:true
    },
    ispremiumuser: Sequelize.BOOLEAN
})

module.exports=User;