const database = require('./../config/database.js');
const {DataTypes} = require('sequelize');

const Product = database.define('Product',{
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    }
},{
    tableName: "product"
});

module.exports = Product;