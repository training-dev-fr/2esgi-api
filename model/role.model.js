const database = require('./../config/database.js');
const {DataTypes} = require('sequelize');

const Role = database.define('Role',{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    code:{
        type: DataTypes.STRING(3),
        allowNull: false,
        unique: true
    }
},{
    tableName: "role"
})

module.exports = Role;